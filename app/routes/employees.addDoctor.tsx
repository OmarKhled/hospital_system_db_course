import { ActionFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import DynamicForm from "~/components/DynamicForm";
import { prisma } from "~/db.server";

export async function loader() {
  return json(await prisma.doctors.findMany());
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  console.log(...Array.from(formData));

  var data: { [key: string]: any } = {};
  formData.forEach(function (value, key) {
    console.log();
    // @ts-ignore
    if (prisma.doctors.fields[key].typeName === "Int") {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  });

  // @ts-ignore
  const Patients = await prisma.doctors.create({ data });

  console.log(Patients);
  return formData;
}

const add = () => {
  const data = useLoaderData<typeof loader>();
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      setHeaders(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <>
      <div className="w-3/4 mx-auto">
        <p className="text-left !mb-0 pb-3">Add a doctor</p>
        <DynamicForm
          headers={headers}
          neglect={["id", "joindate", "doctorid"]}
        />
      </div>
    </>
  );
};

export default add;

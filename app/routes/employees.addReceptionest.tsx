import { ActionFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import DynamicForm from "~/components/DynamicForm";
import { prisma } from "~/db.server";

export async function loader() {
  return json(await prisma.receptionists.findMany());
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  var data: { [key: string]: any } = {};
  formData.forEach(function (value, key) {
    // @ts-ignore
    if (prisma.receptionists.fields[key].typeName === "Int") {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  });

  // @ts-ignore
  const Receptionists = await prisma.receptionists.create({ data });
  console.log(Receptionists);

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
        <p className="text-left !mb-0 pb-3">Add a receptionist</p>
        <DynamicForm
          headers={headers}
          neglect={["id", "joindate", "receptionistid"]}
        />
      </div>
    </>
  );
};

export default add;

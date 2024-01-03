import { json, useLoaderData } from "@remix-run/react";
import DynamicTable from "~/components/DynamicTable";
import { prisma } from "~/db.server";

export async function loader() {
  return json(await prisma.equipmentinstances.findMany());
}

const view = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <p className="mx-auto text-center !mb-0 pb-3">Equipments instances Records</p>
      <div className="w-3/4 mx-auto">
        <DynamicTable negelct={["id"]} data={data} />
      </div>
    </>
  );
};

export default view;

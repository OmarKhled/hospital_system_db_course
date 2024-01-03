import { json, useLoaderData } from "@remix-run/react";
import DynamicTable from "~/components/DynamicTable";
import { prisma } from "~/db.server";

export async function loader() {
  return json(await prisma.roomshistory.findMany());
}

const view = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <p className="mx-auto text-center !mb-0 pb-3">Show Rooms History</p>
      <div className="w-3/4 mx-auto">
        <DynamicTable data={data} />
      </div>
    </>
  );
};

export default view;

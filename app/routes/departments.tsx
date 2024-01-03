import { Link, Outlet } from "@remix-run/react";

const Patients = () => {
  return (
    <div className="prose lg:prose-xl w-full">
      <h1 className="mx-auto text-center pt-12 !mb-0 pb-0">
        Departments Management
      </h1>
      <div className="grid grid-cols-1 mx-auto w-2/4 mt-5 gap-4">
        <Link
          className="bg-slate-200 w-full flex justify-center py-1 px-6 no-underline rounded-md border border-slate-300 mx-auto"
          to={"/departments/view"}
        >
          View
        </Link>
        {/* <Link
          className="bg-slate-200 w-full flex justify-center py-1 px-6 no-underline rounded-md border border-slate-300 mx-auto"
          to={"/patients/add"}
        >
          Add
        </Link> */}
      </div>

      <Outlet />
    </div>
  );
};

export default Patients;

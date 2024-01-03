import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="prose lg:prose-xl w-full">
      <h1 className="mx-auto text-center pt-12 !mb-0 pb-0">
        Al Rahman Management System
      </h1>
      <p className="mx-auto text-center">
        This system allows you to manage patients, employees, and other hospital
        data.
      </p>

      <h3 className="mx-auto text-center">Navigate to:</h3>

      <div className="grid grid-cols-1 gap-4 w-2/4 mx-auto md:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/patients"
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
        >
          Patients
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/employees"
        >
          Employees
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/doctors"
        >
          Doctors
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/nurses"
        >
          Nurses
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/receptionists"
        >
          Receptionists
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/medicines"
        >
          Medicines
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/equipment"
        >
          Equipment
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/departments"
        >
          Departments
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/rooms"
        >
          Rooms
        </Link>
        <Link
          className="bg-slate-200 border-solid border border-slate-300 text-slate-800 text-slate flex align-middle justify-center px-3 py-3 rounded-lg text no-underline"
          to="/records"
        >
          Records
        </Link>
      </div>
    </div>
  );
}

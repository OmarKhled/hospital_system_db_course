import _ from "lodash";
import { Form } from "@remix-run/react";

const DynamicForm = ({
  headers,
  neglect = [],
}: {
  headers: any[];
  neglect: string[];
}) => {
  return (
    <Form className="space-y-4" method="post">
      {headers
        .filter((header) => !neglect.includes(header))
        .map((header, index) => (
          <div key={index} className="flex flex-col">
            <label
              htmlFor={header}
              className="mb-2 text-sm font-semibold text-gray-700"
            >
              {_.upperFirst(header)}
            </label>
            <input
              type="text"
              id={header}
              name={header}
              className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        ))}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </Form>
  );
};

export default DynamicForm;

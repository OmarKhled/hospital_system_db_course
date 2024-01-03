import React, { useEffect, useState } from "react";

const DynamicTable = ({
  data,
  negelct = [],
}: {
  data: any[];
  negelct?: string[];
}) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      setHeaders(Object.keys(data[0]));
    }
  }, [data]);

  const filteredData = data.filter((row) =>
    headers
      .filter((header) => !negelct.includes(header))
      .some((header) =>
        row[header].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="p-1 px-4 w-full border rounded !mb-3 border-slate-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="w-full mt-0 text-sm text-left rtl:text-right text-gray-800 rounded-lg overflow-hidden border-slate-200">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50">
          <tr>
            {headers
              .filter((header) => !negelct.includes(header))
              .map((header, index) => (
                <th key={index} className="!px-6 py-3 bg-slate-100">
                  {header.toUpperCase()}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
              {headers
                .filter((header) => !negelct.includes(header))
                .map((header, idx) => (
                  <td
                    key={idx}
                    className="!px-6 py-3 border-b border-slate-200"
                  >
                    {row[header]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;

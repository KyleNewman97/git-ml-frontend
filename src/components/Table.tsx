import { useEffect, useState } from "react";
import { TableData } from "../types/table-data";
import { classNames } from "../utils/utils-string";

export const Table = ({
  columnNames,
  columnWidths,
  loadData,
  getSampleCount,
  className,
  pageSizes,
  defaultPageSize,
}: {
  columnNames: string[];
  columnWidths: string[];
  loadData: (pageIndex: number, pageSize: number) => Promise<TableData[]>;
  getSampleCount: () => Promise<number>;
  className?: string;
  defaultPageSize?: number;
  pageSizes: number[];
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(
    defaultPageSize ?? (pageSizes.length === 0 ? 10 : pageSizes[0]),
  );
  const [numPages, setNumPages] = useState<number | null>(null);
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    loadData(pageIndex, pageSize).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getSampleCount().then((count) => {
      setNumPages(Math.ceil(count / pageSize));
    });
  }, [pageSize]);

  console.log(numPages);

  return (
    <table
      className={classNames("border-separate border-spacing-0", className)}
    >
      <thead>
        <tr>
          {columnNames.map((columnName, index) => {
            // Determine the border style to apply
            let borderStyle = "";
            if (index === 0) borderStyle = "rounded-tl-lg";
            else if (index === columnNames.length - 1) {
              borderStyle = "rounded-tr-lg border-r-2";
            }

            return (
              <th
                key={columnName}
                className={classNames(
                  "text-left py-4 px-2 bg-table-highlight border-l-2 border-y-2 border-table-outline select-none",
                  borderStyle,
                  columnWidths[index],
                )}
              >
                {columnName}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.rowData().map((value, columnIndex) => {
                let borderStyle = "";
                if (rowIndex === data.length - 1) {
                  if (columnIndex === 0) borderStyle = "rounded-bl-lg";
                  else if (columnIndex === row.rowData().length - 1) {
                    borderStyle = "border-r-2 rounded-br-lg";
                  }
                } else {
                  if (columnIndex === row.rowData().length - 1) {
                    borderStyle += " border-r-2";
                  }
                }

                return (
                  <td
                    key={value}
                    className={classNames(
                      "text-left py-4 px-2 bg-table-main border-l-2 border-b-2 border-table-outline",
                      borderStyle,
                      columnWidths[columnIndex],
                    )}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

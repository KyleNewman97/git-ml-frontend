import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TableData } from "../types/table-data";
import { classNames } from "../utils/utils-string";
import { DoubleArrowLeft } from "./icons/DoubleArrowLeft";
import { DoubleArrowRight } from "./icons/DoubleArrowRight";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";

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
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(
    defaultPageSize ?? (pageSizes.length === 0 ? 10 : pageSizes[0]),
  );
  const [numPages, setNumPages] = useState<number | null>(null);
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    loadData(pageIndex - 1, pageSize).then((data) => setData(data));
  }, [pageIndex, pageSize]);

  useEffect(() => {
    getSampleCount().then((count) => {
      setNumPages(Math.ceil(count / pageSize));
    });
  }, [pageSize]);

  return (
    <div className={classNames("flex flex-col", className)}>
      <table className="border-separate border-spacing-0">
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

      <PageNavigator
        pageIndex={pageIndex}
        numPages={numPages ?? 1}
        setPageIndex={setPageIndex}
      />
    </div>
  );
};

const PageNavigator = ({
  pageIndex,
  numPages,
  setPageIndex,
}: {
  pageIndex: number;
  numPages: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-8 self-end flex gap-1">
      <div
        className="flex justify-center items-center w-10 h-10 rounded-l-md border-2 border-table-outline bg-table-highlight cursor-pointer hover:bg-table-main active:bg-table-outline"
        onClick={() => setPageIndex(1)}
        hidden={pageIndex === 1}
      >
        <DoubleArrowLeft className="w-3/4 h-3/4" />
      </div>
      <div
        className="flex justify-center items-center w-10 h-10 border-2 border-table-outline bg-table-highlight cursor-pointer hover:bg-table-main active:bg-table-outline"
        onClick={() => setPageIndex((idx) => Math.max(idx - 1, 1))}
        hidden={pageIndex === 1}
      >
        <ArrowLeft className="w-1/2 h-1/2" />
      </div>

      <div className="w-20 h-10 bg-table-main border-2 border-table-outline flex justify-center items-center select-none">
        {`${pageIndex} / ${numPages}`}
      </div>

      <div
        className="flex justify-center items-center w-10 h-10 border-2 border-table-outline bg-table-highlight cursor-pointer hover:bg-table-main active:bg-table-outline"
        onClick={() => setPageIndex((idx) => Math.min(idx + 1, numPages ?? 1))}
        hidden={pageIndex === numPages}
      >
        <ArrowRight className="w-1/2 h-1/2" />
      </div>
      <div
        className="flex justify-center items-center w-10 h-10 rounded-r-md border-2 border-table-outline bg-table-highlight cursor-pointer hover:bg-table-main active:bg-table-outline"
        onClick={() => setPageIndex(numPages)}
        hidden={pageIndex === numPages}
      >
        <DoubleArrowRight className="w-3/4 h-3/4" />
      </div>
    </div>
  );
};

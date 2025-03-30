import { classNames } from "../utils/utils-string";

export const Table = <T,>({
  columnNames,
  className,
}: {
  columnNames: string[];
  className?: string;
}) => {
  return (
    <table
      className={classNames("border-separate border-spacing-0", className)}
    >
      <thead className="rounded-t-lg">
        <tr>
          {columnNames.map((columnName, index) => {
            const roundingStyle =
              index === 0
                ? "rounded-tl-lg"
                : index === columnNames.length - 1
                  ? "rounded-tr-lg"
                  : "";

            return (
              <th
                className={`text-left py-4 pl-2 bg-table-main border border-table-border ${roundingStyle}`}
                key={columnName}
              >
                {columnName}
              </th>
            );
          })}
        </tr>
      </thead>
    </table>
  );
};

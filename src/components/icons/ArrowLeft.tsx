import { classNames } from "../../utils/utils-string";

export const ArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      className={classNames("fill-white rotate-180", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

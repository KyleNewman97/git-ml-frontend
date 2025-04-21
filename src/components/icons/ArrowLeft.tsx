import { classNames } from "../../utils/utils-string";

export const ArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      className={classNames("fill-none stroke-white stroke-10", className)}
      viewBox="0 0 35 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M33 2L3 50L33 98" />
    </svg>
  );
};

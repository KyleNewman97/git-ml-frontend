import { classNames } from "../../utils/utils-string";

export const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      className={classNames("fill-none stroke-white stroke-10", className)}
      viewBox="0 0 100 35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2L50 32L98 2" />
    </svg>
  );
};

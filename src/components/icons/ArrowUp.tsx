import { classNames } from "../../utils/utils-string";

export const ArrowUp = ({ className }: { className?: string }) => {
  return (
    <svg
      className={classNames("fill-none stroke-white stroke-10", className)}
      viewBox="0 0 100 35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M98 33L50 3L2 33" />
    </svg>
  );
};

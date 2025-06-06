import { classNames } from "../../utils/utils-string";

export const DoubleArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      className={classNames("fill-white", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
    </svg>
  );
};

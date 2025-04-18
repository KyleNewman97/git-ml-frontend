import { ReactElement, ReactNode, useState } from "react";
import { classNames } from "../utils/utils-string";

type DropdownChild =
  | ReactElement<typeof DropdownButton>
  | ReactElement<typeof DropdownMenu>;

export const Dropdown = ({
  className,
  children,
}: {
  className?: string;
  children: DropdownChild | DropdownChild[];
}) => {
  const [isOpen, setIsOpen] = useState(false); // could use context here to allow children to see state
  return <div className={classNames("", className)}>{children}</div>;
};

export const DropdownButton = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return <button className={classNames("", className)}>{children}</button>;
};

export const DropdownMenu = ({}) => {
  return <></>;
};

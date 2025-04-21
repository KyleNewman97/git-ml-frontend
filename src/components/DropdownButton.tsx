import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "../utils/utils-string";
import { ArrowDown } from "./icons/ArrowDown";
import { ArrowUp } from "./icons/ArrowUp";

type DropdownChild =
  | ReactElement<typeof DropdownButton>
  | ReactElement<typeof DropdownMenu>;

interface IDropdownContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownContext = createContext<IDropdownContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const Dropdown = ({
  className,
  isOpen,
  setIsOpen,
  children,
}: {
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: DropdownChild | DropdownChild[];
}) => {
  return (
    <DropdownContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      <div className={classNames("", className)}>{children}</div>
    </DropdownContext.Provider>
  );
};

export const DropdownButton = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const dropdownContext = useContext(DropdownContext);

  const toggleIsOpen = useCallback(() => {
    dropdownContext.setIsOpen((isOpen) => !isOpen);
  }, [dropdownContext.setIsOpen]);

  return (
    <button
      className={classNames(
        "flex justify-center pl-4 pr-2 items-center h-10 border-2 border-table-outline cursor-pointer rounded bg-table-highlight hover:bg-table-main active:bg-table-outline overflow-hidden",
        className,
      )}
      onClick={toggleIsOpen}
    >
      {children}

      {dropdownContext.isOpen && <ArrowUp className="w-8 pl-4 stroke-14" />}
      {!dropdownContext.isOpen && <ArrowDown className="w-8 pl-4 stroke-14" />}
    </button>
  );
};

export const DropdownMenu = ({ children }: { children?: ReactNode }) => {
  const dropdownContext = useContext(DropdownContext);

  if (dropdownContext.isOpen) {
    return (
      <div className="flex flex-col w-fit bg-table-highlight border-2 border-table-outline rounded">
        {children}
      </div>
    );
  } else {
    return undefined;
  }
};

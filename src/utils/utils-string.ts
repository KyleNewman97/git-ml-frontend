import { IDict } from "../types/idict";

export const snakeToCamel = (str: string) => {
    return str
        .toLowerCase()
        .replace(/([_][a-z])/g, (group) =>
            group.toUpperCase().replace("_", "")
        );
};

export const snakeKeysToCamelKeys = <T>(obj: Object): T => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[snakeToCamel(key)] = value;
        return acc;
    }, {} as IDict) as T;
};

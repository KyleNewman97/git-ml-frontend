import { IResponse } from "../types/iresponse";
import { snakeKeysToCamelKeys } from "./utils-string";

export const authFetch = async <T>(
    input: RequestInfo | URL,
    init?: RequestInit
): Promise<IResponse<T | null>> => {
    const response = await fetch(input, init);

    return {
        status: response.status,
        body: response.ok
            ? snakeKeysToCamelKeys<T>(await response.json())
            : null,
    };
};

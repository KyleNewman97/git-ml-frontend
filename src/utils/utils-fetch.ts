import { IResponse } from "../types/iresponse";

export const authFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<IResponse<any>> => {
  const response = await fetch(input, init);

  return {
    status: response.status,
    body: response.ok ? await response.json() : null,
  };
};

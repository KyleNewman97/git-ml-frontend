import { IResponse } from "../../types/iresponse";
import { authFetch } from "../../utils/utils-fetch";
import { snakeKeysToCamelKeys } from "../../utils/utils-string";
import { ICommit } from "./schemas/commit";

export const getRepoCommitsApi = async (
  repoName: string,
  pageIndex: number,
  pageSize: number,
): Promise<IResponse<ICommit[] | null>> => {
  const url = new URL(`/${repoName}/commits`, import.meta.env.VITE_BACKEND_URL);
  url.searchParams.append("page_index", `${pageIndex}`);
  url.searchParams.append("page_size", `${pageSize}`);

  const response = await authFetch(url, {
    method: "GET",
  });

  if (response.status === 200) {
    response.body = (response.body as any[]).map((c) =>
      snakeKeysToCamelKeys(c),
    );
  }

  return response;
};

export const getRepoCommitCountApi = async (
  repoName: string,
): Promise<IResponse<number | null>> => {
  const url = new URL(
    `/${repoName}/commits/count`,
    import.meta.env.VITE_BACKEND_URL,
  );

  return await authFetch(url, {
    method: "GET",
  });
};

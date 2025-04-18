import { useParams } from "react-router";
import { Table } from "../../components/Table";
import {
  getRepoCommitCountApi,
  getRepoCommitsApi,
} from "../../api/commits/api-commits";

import { Commit, ICommit } from "../../api/commits/schemas/commit";

export const CommitsPage = () => {
  const params = useParams();

  const loadRepoCommits = async (
    pageIndex: number,
    pageSize: number,
  ): Promise<Commit[]> => {
    if (params.repoName === undefined) return [];
    const response = await getRepoCommitsApi(
      params.repoName,
      pageIndex,
      pageSize,
    );

    if (response.status !== 200) return [];
    const commits = response.body as ICommit[];

    return commits.map((c) => new Commit(c));
  };

  const getRepoCommitCount = async (): Promise<number> => {
    if (params.repoName === undefined) return 0;
    const response = await getRepoCommitCountApi(params.repoName);

    if (response.status !== 200) return 0;
    return response.body as number;
  };

  return (
    <main className="bg-main text-primary-text w-full min-h-screen flex flex-col items-center">
      <div className="max-w-2/3 w-full m-20 flex flex-col">
        <p className="text-3xl font-bold">{params.repoName}</p>

        <Table
          className="w-full mt-10"
          columnNames={Commit.columnNames()}
          columnWidths={Commit.columnWidths()}
          loadData={loadRepoCommits}
          getSampleCount={getRepoCommitCount}
          pageSizes={[10, 20, 50, 100]}
          defaultPageSize={50}
        />
      </div>
    </main>
  );
};

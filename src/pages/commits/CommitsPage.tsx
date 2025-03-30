import { useParams } from "react-router";
import { Table } from "../../components/Table";

export const CommitsPage = () => {
  const params = useParams();

  return (
    <main className="bg-main text-primary-text w-full min-h-screen flex flex-col items-center">
      <div className="max-w-2/3 w-full m-20 flex flex-col">
        <p className="text-3xl font-bold">{params.repoName}</p>

        <Table
          columnNames={["Added", "Message", "Committer", "Hash"]}
          className="w-full mt-10"
        />
      </div>
    </main>
  );
};

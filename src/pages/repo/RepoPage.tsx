import { useParams } from "react-router";

export const RepoPage = () => {
    const params = useParams();
    return <main>{`Repo page for ${params.repoName}`}</main>;
};

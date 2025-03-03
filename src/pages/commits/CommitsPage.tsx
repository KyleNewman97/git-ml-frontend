import { useParams } from "react-router";

export const CommitsPage = () => {
    const params = useParams();
    return <main>{`Commits page for ${params.repoName}`}</main>;
};

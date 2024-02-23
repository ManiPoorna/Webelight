/* eslint-disable react/prop-types */
import CommitActivity from "./CommitActivity";
import ContributorActivity from "./ContibutorActivity";

const Graphs = ({owner,repo}) => {
  return (
    <div className="graphs">
      <CommitActivity owner={owner} repo={repo} />
      <ContributorActivity owner={owner} repo={repo} />
    </div>
  );
};

export default Graphs;

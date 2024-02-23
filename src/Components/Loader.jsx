import { Skeleton } from "@mui/material"

const Loader = () => {
  return (
    <div className="loader">
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
    </div>
  );
}

export default Loader
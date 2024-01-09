import { Link, Outlet } from "react-router-dom";

const FullStats = () => {
  return (
    <>
      <Link to="/">home</Link>
      <h1>These will be stats</h1>
      <Outlet />
    </>
  );
};

export default FullStats;

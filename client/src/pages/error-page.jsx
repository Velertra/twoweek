import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Link to="/">Go Back Home</Link>
      <p>Sorry, an unexpected error has occurred</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;

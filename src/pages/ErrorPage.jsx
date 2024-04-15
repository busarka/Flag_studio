import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div >
      <h1>Oops! :(</h1>
      <p>Такой страницы не существует, вернитесь назад и попробуйте снова.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
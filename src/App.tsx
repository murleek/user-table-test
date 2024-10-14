import "./App.css";
import { useGetUsersQuery } from "./app/services/user.ts";

function App() {
  const { data, isLoading, error } = useGetUsersQuery();

  return (
    <>
      <pre>
        <code>
          {isLoading ? "Loading..." : JSON.stringify(data, null, 4)}
          {error && JSON.stringify(error, null, 4)}
        </code>
      </pre>
    </>
  );
}

export default App;

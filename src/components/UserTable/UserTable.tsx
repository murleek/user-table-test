import { useGetUsersQuery } from "../../app/services/user.ts";
import UserRow from "./UserRow.tsx";
import LoadingRow from "./LoadingRow.tsx";
import NotFoundRow from "./NotFoundRow.tsx";
import ErrorRow from "./ErrorRow.tsx";
import { v4 as uuid } from "uuid";

export default function UserTable() {
  const { data, isLoading, error } = useGetUsersQuery();

  return (
    <div className="container-xxl">
      <div className="w-100 overflow-x-scroll">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <LoadingRow />
            ) : data ? (
              data.map((x) => <UserRow user={x} key={uuid()} />)
            ) : (
              <NotFoundRow />
            )}
            {error && <ErrorRow />}
          </tbody>
        </table>
      </div>
    </div>
  );
}

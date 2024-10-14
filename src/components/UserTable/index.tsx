import { useGetUsersQuery } from "../../app/services/user";
import UserRow from "./UserRow";
import LoadingRow from "./LoadingRow";
import NotFoundRow from "./NotFoundRow";
import ErrorRow from "./ErrorRow";

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
              data.map((x) => <UserRow user={x} key={x.id} />)
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

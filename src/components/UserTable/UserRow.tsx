import { User } from "../../types.ts";
export default function UserRow({ user }: { user: User }) {
  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.city}</td>
    </tr>
  );
}

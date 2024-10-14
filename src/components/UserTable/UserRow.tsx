import { User } from "../../types";
import styles from "./UserRow.module.scss"; //used for hovers
export default function UserRow({ user }: { user: User }) {
  const userClick = () => {
    console.log(user);
  };

  return (
    <tr className={styles.row} role="button" onClick={userClick}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.city}</td>
    </tr>
  );
}

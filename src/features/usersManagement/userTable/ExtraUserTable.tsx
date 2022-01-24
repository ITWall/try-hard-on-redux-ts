import { useGetListUserDelayQuery } from "../api/ReqresApi";
import "./UserTable";

export function ExtraUserTable() {
  const { data: pageUser } = useGetListUserDelayQuery(1);
  let userRow: any = [];
  pageUser?.data.forEach((user) => {
    userRow.push(
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.avatar}</td>
      </tr>
    );
  });
  console.log(pageUser);
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>{userRow}</tbody>
      </table>
    </div>
  );
}

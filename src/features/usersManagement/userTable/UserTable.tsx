import { useEffect, useState } from "react";
import {
  useGetListUserDelayQuery,
  useGetListUserQuery,
} from "../api/ReqresApi";
import { ExtraUserTable } from "./ExtraUserTable";
import "./UserTable";

export function UserTable() {
  // const { data: pageUser } = useGetListUserQuery(1);
  let [page, setPage] = useState(1);
  const { data: pageUser, isSuccess, refetch } = useGetListUserQuery(page);
  let [displayExtraTable, setDisplayExtraTable] = useState(false);
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

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setDisplayExtraTable(true);
      }, 3000);
    }
  });

  let nextPage = () => {
    setPage((page = page + 1));
  };

  let prevPage = () => {
    setPage((page = page - 1));
  };

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
      <button onClick={prevPage}>Pre</button>
      <button onClick={nextPage}>Next</button>

      {displayExtraTable && <ExtraUserTable />}
    </div>
  );
}

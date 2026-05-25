import "../../css/AdminUsers.css";
import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function AdminUsers() {

const [users, setUsers] =
  useState([]);

useEffect(() => {

  const fetchUsers =
    async () => {

      try {

        const userInfo =
          JSON.parse(
            localStorage.getItem(
              "userInfo"
            )
          );

        const config = {

          headers: {

            Authorization:
              `Bearer ${userInfo.token}`,

          },

        };

        const { data } =
          await axios.get(

            `${import.meta.env.VITE_API_URL}/users`,

            config
          );

        setUsers(data);

      } catch (error) {

        console.log(error);

      }

  };

  fetchUsers();

}, []);
  

  return (
    <div className="admin-users">

      <h1>
        Users Management
      </h1>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user._id}>

              <td>{user._id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.role}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminUsers;
import React, { useState, useEffect } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${email}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto mr-4 w-full">
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Name</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border">
              Email
            </th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border">
              Password
            </th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{user.username}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.password}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => deleteUser(user.email)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

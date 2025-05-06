import { useState, useEffect } from "react";
import { db } from "../config/firebase"; // your Firebase config file
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const AllusersDetails = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const usersCollection = await getDocs(collection(db, "users"));
      const usersList = usersCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
      setLoading(false);
    } catch (error) {
      setMessage("❌ Error fetching users: " + error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers(users.filter((user) => user.id !== userId));
      setMessage("✔️ User deleted successfully.");
    } catch (error) {
      setMessage("❌ Error deleting user: " + error.message);
    }
  };

  useEffect(() => {
    // Simply fetch all users
    fetchUsers();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">All Users</h1>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {message && <p className="text-center text-red-500">{message}</p>}

      {users.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Role</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-sm text-gray-800">{user.name}</td>
                  <td className="py-2 px-4 text-sm text-gray-800">{user.email}</td>
                  <td className="py-2 px-4 text-sm text-gray-800">{user.role}</td>
                  <td className="py-2 px-4 text-sm">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default AllusersDetails;

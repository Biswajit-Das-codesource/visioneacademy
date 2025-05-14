import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">All Users</h1>

      {loading && (
        <div className="flex space-x-2 justify-center m-2">
          {[...Array(3)].map((_, i) => {
            const bounceClass =
              "w-4 h-4 bg-cyan-400 rounded-full animate-bounce";
            const delayStyle = { animationDelay: `${i * 0.2}s` };

            return (
              <span key={i} className={bounceClass} style={delayStyle} />
            );
          })}
        </div>
      )}

      {message && <p className="text-center text-red-500">{message}</p>}

      {users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-3 rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name.toUpperCase()}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{user.email}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => navigate(`/admin-dashboard/user/${user.id}`)}
                  className="w-full text-white bg-green-400 rounded-xl cursor-pointer text-sm py-2 mt-2"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default AllusersDetails;

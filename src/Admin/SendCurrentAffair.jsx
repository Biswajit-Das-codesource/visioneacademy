import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const CreateEntry = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "entries"), {
        title,
        description,
        createdAt: serverTimestamp(),
      });
      setMessage("✅ Data added with ID: " + docRef.id);
      setTitle("");
      setDescription("");
      fetchEntries(); // Refresh list after submission
    } catch (error) {
      setMessage("❌ Error adding document: " + error.message);
    }
  };

  const fetchEntries = async () => {
    const querySnapshot = await getDocs(collection(db, "entries"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEntries(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "entries", id));
      setMessage("🗑️ Post deleted");
      fetchEntries(); // Refresh after deletion
    } catch (error) {
      setMessage("❌ Error deleting document: " + error.message);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Add Entry
          </h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title"
            className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Enter description"
            className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>

          {message && (
            <p className="mt-4 text-sm text-center text-green-600">{message}</p>
          )}
        </form>
      </div>

      {/* Posts Section */}
      <div className="max-w-2xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">All Posts</h3>
        {entries.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-lg p-4 shadow-md mb-4 relative"
            >
              <h4 className="text-lg font-bold text-blue-700">
                {entry.title}
              </h4>
              <p className="text-gray-700">{entry.description}</p>
              <button
                onClick={() => handleDelete(entry.id)}
                className="absolute top-2 right-2 text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreateEntry;

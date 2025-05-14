import React, { useEffect, useState } from "react";
import { db } from "../config/firebase"; // Update the path if needed
import { collection, getDocs } from "firebase/firestore";

const StudentCurrentAffair = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, "entries"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(data);
    };

    fetchEntries();
  }, []);



  console.log(entries)
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📄 Fetched Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry) => (
            <li key={entry.id} className="p-4 border rounded shadow bg-white">
              <h3 className="text-lg font-semibold">{entry.title}</h3>
              <p className="text-gray-700">{entry.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentCurrentAffair;

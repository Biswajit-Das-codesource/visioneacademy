import { useEffect, useState } from "react";
import { auth, provider, db } from "../config/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      let role = "student"; // default role

      if (docSnap.exists()) {
        setMessage("✅ You are already registered.");
        role = docSnap.data().role || "student";
      } else {
        // You can also assign role based on email:
        if (user.email === "biswajit9348das@gmail.com") {
          role = "admin";
        }

        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: role,
          createdAt: serverTimestamp(),
        });

        setMessage("🎉 Registration successful!");
      }

      // Navigate based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
        console.log(admin)
      } else {
        navigate("/");
        console.log("no")
      }

      console.log("render");
    } catch (error) {
      console.log("Google Sign-In Error:", error.message);
      setMessage("❌ Sign-In failed. Try again.");
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setMessage("🔓 Signed out successfully!");
      })
      .catch((error) => setMessage("❌ Sign-Out Error: " + error.message));
  };
  console.log(user)

  return (
    <div className="h-min bg-white flex items-center justify-center px-4 py-22">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start p-8 md:p-0">
        {/* Illustration Section */}
        <div className="md:w-1/2 w-full bg-indigo-50 flex flex-col items-center justify-center p-6">
          <img
            src="https://testbook.com/assets/img/index/explore-pass__illust.svg"
            alt="Illustration"
            className="w-60 mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-800 text-center">
            Welcome to <br />
            Visione Academy
          </h1>
        </div>

        {/* Login Content Section */}
        <div className="md:w-1/2 w-full px-8 py-6 flex flex-col items-center justify-center">
          {user ? (
            <div className="text-center space-y-4">
              <img
                src={user.photoURL}
                alt={"https://imgs.search.brave.com/8KMXYpb7y1av9OTKC69OVK7Nv51wUOAe10dx2phv1ug/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzk0Lzc0LzY1/LzM2MF9GXzEwOTQ3/NDY1NjZfajhMdnBr/ckJ3bm4zNlVpd05K/VHhESG5CTURWSjZt/UG0uanBn"}
                className="w-20 h-20 rounded-full border-4 border-indigo-500 mx-auto"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {user.displayName}
              </h2>
              <p className="text-gray-500">{user.email}</p>
              <button
                onClick={handleSignOut}
                className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 font-medium test-xl">
                Login with your Google Account
              </p>
              <button
                onClick={handleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
                Sign in with Google
              </button>
            </>
          )}

          {message && (
            <p className="mt-6 text-sm text-green-600 font-medium text-center">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });
    return () => unsub();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Bem-vindo, {user?.email}</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
}

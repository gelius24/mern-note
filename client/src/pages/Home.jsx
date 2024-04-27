import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../firebase"
import { useEffect, useState } from "react";

export default function Home() {
  const auth = getAuth(app);
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setName(user.email);
        console.log(user)
      } 
    });
  }, [])

  return (
    <div>
      <h2 className="text-3xl">Bonjour</h2>
      <p>{name && name}</p>
    </div>
  )
}
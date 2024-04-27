import { useState } from "react"
import GoogleOAuth from "../components/GoogleOAuth"
import {app} from "../firebase"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const auth = getAuth(app);
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("formData", formData)
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      }).then(() => {
        alert("Compte creé. Connectez-vous pour commencer à créer des notes.")
        navigate("/login")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="w-[85vw] sm:w-96 flex flex-col gap-4 border border-white p-8 rounded-md">
      <h2 className="text-2xl">Créer un compte</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input id="email" name="email" type="email" placeholder="Email" className="rounded-md w-full p-2" onChange={handleChange} />
        <input id="password" name="password" type="password" placeholder="Mot de passe" className="rounded-md w-full p-2" onChange={handleChange} />
        <input type="submit" className="rounded-md p-2 bg-blue-600 text-white cursor-pointer" />
      </form>
      <div className="flex flex-col gap-1 mt-10">
      <p className="text-xs">ou utilisez <a href="https://oauth.net/2/" target="_blank" className="text-blue-600 hover:underline cursor-pointer">OAuth2.0</a> avec votre compte google</p>
      <GoogleOAuth />
      </div>
    </div>
  )
}
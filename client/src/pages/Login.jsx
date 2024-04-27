import { useState } from "react";
import { app } from "../firebase"
import GoogleOAuth from "../components/GoogleOAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = getAuth(app);
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      }).then(() => {
        navigate("/Home")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="border border-black p-6 rounded-lg w-[400px] md:w-[60vw] md:max-w-[600px]">
      <h2 className="text-center mb-6 text-xl">Connexion</h2>
      <form className="flex flex-col gap-2">   
        <input name="email" className="rounded-md w-full p-2" type="text" placeholder="Email" onChange={handleChange}/>
        <input name="password" className="rounded-md w-full p-2" type="password" placeholder="Mot de passe" onChange={handleChange}/>
        <button type="submit" className="rounded-md p-2 bg-blue-600 text-white mt-4">Connexion</button>
        <div className="flex flex-col gap-1 mt-10">
          <p className="text-xs">ou utilisez <a href="https://oauth.net/2/" target="_blank" className="text-blue-600 hover:underline cursor-pointer">OAuth2.0</a> avec votre compte google</p>
          <GoogleOAuth />
        </div>
      </form>
    </div>
  )
}
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="text-center">
      <p className="text-5xl mb-6">Bonjour</p>
      <p className="text-gray-600 max-w-[90vw] ">Connectez vous à un compte pour pouvoir commencer à prendre des notes.</p>
      <div className="mt-16 px-4 py-2 border border-black rounded-md cursor-pointer"><Link to="/login">Connexion</Link></div>
      <p className="text-blue-600 text-xs hover:underline cursor-pointer mt-2">ou créez un compte</p>
    </div>
  )
}
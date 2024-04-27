import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 border-b-2 border-black w-full flex justify-end items-center pr-36 h-16">
      <nav>
        <ul className="flex gap-3 ">
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/home">Profil</Link></li>
          <li><Link to="/home">À Propos</Link></li>

          <li className="ml-6"><Link to="/signup">Inscription</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  )
}
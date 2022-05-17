import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Topnav from "../Components/topnav";


const AjoutPersonne = () => {
    return (
        <div className="flex flex-col">
            <Topnav />
            <p className="text-center text-2xl text-semibold pt-20">Formulaire d'ajout</p>
            <p>Nom</p>
            <input className="border-2" type="text"></input>
            <p>Prénom</p>
            <input className="border-2" type="text"></input>
            <p>Email</p>
            <input className="border-2" type="email"></input>
            <p>Numéro de téléphone</p>
            <input className="border-2" type="tel"></input>
            <div className="w-full flex flex-col items-center">
                <Link className="w-24 mt-10 text-center border-2 rounded-md border-cyan-500" to="/nouvelleSoiree">Valider</Link>
            </div>
            <div className="pt-24 w-full flex flex-col items-center">

            <Navbar />
            </div>
        </div>
    )
}

export default AjoutPersonne;
import react from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-zinc-900 justify-center items-center flex rounded-md w-80 flex-row mt-28">
            <Link className="text-white" to="/">{`<`}[] Home</Link>
            <Link className="text-white ml-5" to="/nouvelleSoiree">(+)Ajouter</Link>
        </div>
    )
}

export default Navbar
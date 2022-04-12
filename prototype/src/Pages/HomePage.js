import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="flex flex-col justify-center bg-gray-300 items-center h-screen">
            <h1 className="text-[30px] pb-8">Accueil</h1>
            <div className="rounded-xl bg-gray-50 w-1/4 h-1/4 mb-8">
                <h4 className="text-center pt-2">Soirées récentes :</h4>
                <table class="table-fixed">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Lieu</th>
                    <th>Heure</th>
                    <th>Durée</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>10/04/2022</td>
                    <td>Orsay</td>
                    <td>21H</td>
                    <td>5H</td>
                    </tr>
                    <tr>
                    <td>10/04/2022</td>
                    <td>Orsay</td>
                    <td>21H</td>
                    <td>5H</td>
                    </tr>
                    <tr>
                    <td>10/04/2022</td>
                    <td>Orsay</td>
                    <td>21H</td>
                    <td>5H</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div>
            <Link to="/nouvellesoiree" className="rounded-xl bg-green-500 p-4">Nouvelle soirée</Link>
            </div>
        </div>
    );
}

export default HomePage;
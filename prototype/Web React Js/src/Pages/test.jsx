import { Link } from "react-router-dom";
import React from 'react'
import Navbar from "../Components/navbar";
import Topnav from "../Components/topnav";


const Test = () => {
    return (
        <>
                <Topnav />
                <div className="flex flex-col justify-center bg-gray-300 items-center h-screen w-screen">
                    <h1 className="text-[30px] pb-8">Accueil</h1>
                    <div className="rounded-xl bg-gray-50 w-80 h-1/4 mb-8 items-center flex flex-col">
                        <h4 className="text-center pt-2">Soirées récentes :</h4>
                        <table className="table-fixed">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th className="pl-3">Nom</th>
                                    <th className="pl-3">Lieu</th>
                                    <th className="pl-3">Heure</th>
                                    <th className="pl-3">Durée</th>
                                    <th className="pl-3">Invités</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(item => {
                                    <tr>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>
                                            {item.lieu}
                                        </td>
                                        <td>
                                            {item.heure}
                                        </td>
                                        <td>
                                            {item.duree}
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to="/nouvellesoiree" className="rounded-xl bg-green-500 p-4">Nouvelle soirée</Link>
                    </div>
                    <Navbar />
                </div>
            </>
    );
}

export default Test;
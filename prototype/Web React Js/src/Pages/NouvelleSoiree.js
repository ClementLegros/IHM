import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import HomePage from "./HomePage";
import Navbar from "../Components/navbar";
import Topnav from "../Components/topnav";


function NouvelleSoiree() {

    const [soiree, setSoiree] = useState()

    const addPersonne = () => {
        let list = document.getElementById("listeInviter")
        let ulpapa = document.createElement('li');
        ulpapa.innerText = 'Papa';
        list.appendChild(ulpapa);
        let ulmama = document.createElement('li');
        ulmama.innerText = 'Maman';
        list.appendChild(ulmama);
    }

    return (
        <>
        <Topnav />
        <div className="h-screen flex flex-col items-center bg-gray-300">
            <p>Nouvelle soirée</p>
            <div className="bg-gray-50 rounded-xl w-72 h-96 flex flex-col items-center mt-20">
                <p>Date de la soirée</p>
                <input className="border-2" type="date"></input>
                <p>Heure</p>
                <input className="border-2"></input>
                <p>Durée</p>
                <input className="border-2"></input>
                <p>Lieu</p>
                <input className="border-2"></input>
                <p>Nom de la soirée</p>
                <input className="border-2"></input>
                <p className="mt-5">Liste des inviter</p>
                
                <Link to="/ajout" onClick={addPersonne} className="border-2 border-cyan-500 text-cyan-500 rounded-xl px-5">Ajouter des personnes a la soirée</Link>
                <ul id="listeInviter">
                    
                </ul>
            </div>
            <Link to="/" className="mt-4 border-2 border-cyan-500 text-cyan-500 rounded-xl px-8 py-4 bg-gray-50">
                Creer la soirée
            </Link>
            <Navbar />
        </div >
        
        </>

        
    )
}

export default NouvelleSoiree;
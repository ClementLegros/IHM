import { Link } from "react-router-dom";
import React from 'react'
import Navbar from "../Components/navbar";
import Topnav from "../Components/topnav";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        if (this.props.data == null) {
            return;
        }
        this.setState({ data: this.props.data })
    }

    render() {
        return (
            <>
                <div className="flex flex-row items-center float-left w-screen h-14 bg-[#37392E]">
                    <img className="rounded-xl float-right w-10 h-10" src="./personnage.jpg" />
                </div>
                <div className="flex flex-col justify-center bg-[#f5f5f5] items-center h-screen w-screen">
                    <h1 className="text-[30px] pb-8">Accueil</h1>
                    <div className="rounded-xl bg-[#37392E] text-white w-80 h-1/4 mb-8 items-center flex flex-col mb-16">
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
                        <Link to="/nouvellesoiree" className="rounded-xl bg-[#F5CA66] p-4">Nouvelle soirée</Link>
                    </div>
                </div>
            </>
        );
    }

}

export default HomePage;
import { Link } from "react-router-dom";
import React from 'react'

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
            <div className="flex flex-col justify-center bg-gray-300 items-center h-screen w-screen">
                <h1 className="text-[30px] pb-8">Accueil</h1>
                <div className="rounded-xl bg-gray-50 w-72 h-1/4 mb-8 items-center flex flex-col ">
                    <h4 className="text-center pt-2">Soirées récentes :</h4>
                    <table className="table-fixed">
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
                                <td>
                                    19 avril 2022
                                </td>
                                <td>
                                    Paris
                                </td>
                                <td>
                                    20h
                                </td>
                                <td>
                                    6h
                                </td>
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

}

export default HomePage;
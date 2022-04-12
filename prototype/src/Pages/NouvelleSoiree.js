

function NouvelleSoiree() {
    return (

        <>
        <div className="h-screen flex flex-col justify-center items-center bg-gray-300">
            <p>Nouvelle soirée</p>
            <div className="bg-gray-50 rounded-xl mx-12 my-12 w-1/4 h-1/4 pl-5 pt-2">
                <p className="underline decoration-2 pb-5">Détails de la soirée</p>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th>Date</th>
                                <th>Lieu</th>
                                <th>Heure</th>
                                <th>Durée</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25/04/2021</td>
                                <td>Université Paris Saclay</td>
                                <td>21h</td>
                                <td>5 heures</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-gray-50 rounded-xl mx-12 my-12 w-1/4 h-1/4 pl-5 pt-2">
                <p className="underline decoration-2 pb-5">Liste invité</p>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Téléphone</th>
                                <th>Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Huge</td>
                                <td>Babar</td>
                                <td>0645782154</td>
                                <td>hb@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Huge</td>
                                <td>Babar</td>
                                <td>0645782154</td>
                                <td>hb@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Huge</td>
                                <td>Babar</td>
                                <td>0645782154</td>
                                <td>hb@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
        </>

        
    )
}

export default NouvelleSoiree;
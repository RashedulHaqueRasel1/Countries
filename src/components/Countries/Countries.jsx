import { useEffect } from "react";
import { useState } from "react"
import Countrie from "../Countrie/Countrie"
import './Countries.css'

export default function Countries() {

    const [countries, setCountries] = useState([]);

    const [visited, setVisited] = useState([]);



    const handleVisited = (country) => {
        // console.log("Add new btn")
        // console.log(country)
        
        const newVisitedCountry = [...visited, country]
        setVisited(newVisitedCountry)
    }







    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div >
            <h1>Countris</h1>
            <h2>Visited Country : {visited.length}</h2>

            <div>
                <ul>
                    {
                        visited.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            
            <div className="card">

                {

                    countries.map((item ) => {
                        return (
                            <Countrie
                             key={item.cca3} 
                             handleVisited={handleVisited}
                             countrie={item}></Countrie>
                        )

                    })

                    // console.log(countrie)



                }
            </div>



        </div>
    )
}

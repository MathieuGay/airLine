import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import '../styles/Countries.css';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
                setFilteredCountries(response.data);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }, []);

    const sortByContinent = (continent) => {
        const filtered = countries.filter(country => country.region === continent);
        setFilteredCountries(filtered);
    }

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        const filtered = countries.filter(country => country.name.common.toLowerCase().includes(term.toLowerCase()));
        setFilteredCountries(filtered);
    }


    return (
        <>
            <div>
                <h1>Liste des pays</h1>
                <div>
                    <InputText
                        className="p-input-icon-left search-input"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Rechercher un pays"
                    />
                </div>
                <div className="button-container">
                    <Button onClick={() => sortByContinent('Europe')} severity="danger" label="Europe" raised></Button>
                    <Button onClick={() => sortByContinent('Asia')} severity="danger" label="Asie" raised></Button>
                    <Button onClick={() => sortByContinent('Africa')} severity="danger" label="Africa" raised></Button>
                    <Button onClick={() => sortByContinent('Americas')} severity="danger" label="America" raised></Button>
                    <Button onClick={() => sortByContinent('Oceania')} severity="danger" label="Oceanie" raised></Button>
                    <Button onClick={() => setFilteredCountries(countries)} raised>Réinitialiser</Button>
                </div>
                <table className="country-table">
                    <thead>
                        <tr>
                            <th>Pays</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCountries.map(country => (
                            <tr key={country.cca2}>
                                <td>{country.name.common}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default CountryList;

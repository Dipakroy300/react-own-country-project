import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {

    const countries=useLoaderData();
    console.log(countries.name);
    return (
        <div>
            <h2>Show all countries here:{countries.length}</h2>
            {
                countries.map(country=> <Country 
                key={country.cca3}
                country={country}
                > </Country>)
            }
        </div>
    );
};

export default Countries;
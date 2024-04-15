import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import { useState } from 'react';
import './Countries.css'
const Countries = () => {

    const countries = useLoaderData();
    // console.log(countries.name);
    const countryData=countries;
    const [item,setItem]=useState('');

    const handleValue=(e)=>{
        const data=e.target.value;
        setItem(data);

    }
    
       const filteredCountry = countryData?.filter(country =>
        country.cca3.toLowerCase().includes(item.toLowerCase()));
         console.log(filteredCountry);

    return (
        <div>
            <h2>Show all countries here:{countries.length}</h2>
            <input  value={item} onChange={handleValue} placeholder='search' type="text" />
            <button>Search</button>
            <div className="countries">
                {
                    filteredCountry.map(country => <Country
                        key={country.cca3}
                        country={country}

                    > {country.name.common} </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
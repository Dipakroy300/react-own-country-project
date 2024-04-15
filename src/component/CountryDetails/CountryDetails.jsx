/* eslint-disable no-undef */
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const countryDetails = useLoaderData();

    const navigate=useNavigate();

    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <p>{countryDetails.length}</p>
            <p>Name:{countryDetails[0]?.capital}</p>
            <p>{countryDetails[0]?.name?.common}</p>
            <img src={countryDetails[0].flags.png} alt="" />
           <div>
           <button onClick={goBack}><Link>Go Back</Link></button>
           </div>
        
             
        

        </div>
    );
};

export default CountryDetails;
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Country = ({country}) => {

     const {capital,name} =country;
    //  console.log(country);
    return (
        <div>
             <h3>Name:{name.common}</h3> 
             <h3>capital:{capital}</h3> 
              <img src={country.flags.png} alt="" />
            <h3>Id:{country.cca3}</h3>
             <Link to={`/country/${country.cca3}`}>More</Link>
           
        </div>
    );
};

export default Country;
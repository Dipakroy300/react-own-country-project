import React from 'react';

const Country = ({country}) => {

     
    return (
        <div>
             <h3>Name:{country.name.common}</h3> 
             <h3>capital:{country.capital}</h3> 
             <h3>Currency:{country.alpha}</h3> 
           
        </div>
    );
};

export default Country;
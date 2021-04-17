import React from 'react';

const Links = ({texto}) =>{
    return(
        <li className="nav-item">
            <a className="nav-link active">{texto}</a>
        </li>
    )
}

export default Links;
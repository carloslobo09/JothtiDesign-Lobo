import React from 'react';

const Links = ({texto}) =>{
    return(
        <li class="nav-item">
            <a className="nav-link active" href='#'>{texto}</a>
        </li>
    )
}

export default Links;
import React from 'react';
import{NavLink} from 'react-router-dom'

function NavBar () {

    return(

        <div className='navbar'>
            <div className='navbar-link'>
        <NavLink className="link" to="/" > Home </NavLink>
        <NavLink className="link" to="/read" > Catalog </NavLink>
         </div>
         

        </div>
    )
}


export default NavBar;
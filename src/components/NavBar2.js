import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function NavBar2() {

    return (

        <div className="ui menu" >
            <Button className="ui primary button"  as={Link} to='/'>
                Home
            </Button>
            <Button as={Link} to='/read'>
                Catalog
            </Button>
        </div>
    )
}


export default NavBar2;
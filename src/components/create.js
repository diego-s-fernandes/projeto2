import { Button, Checkbox, Form } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://6376494781a568fc25fad6f7.mockapi.io/projetoironhack`, {
            firstName,
            lastName,
            checkbox
        })
    }
 

    return (
    <div>
         <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='Nome' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Sobrenome' onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='Concordo com a utilização das informações'  onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submiter</Button>
    </Form>
   
    </div>
    );
}

export default Create
import { Button, Checkbox, Form } from 'semantic-ui-react';
import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function CreateFormPage() {
    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState(false);
    const [occupation, setOccupation] = useState(false);
    const [phonenumber, setPhoneNumber] = useState(false);


    const postData = () => {
        axios.post(`https://6376494781a568fc25fad6f7.mockapi.io/crudironhack`, {
            firstName,
            lastName,
            checkbox,
            email,
            occupation,
            phonenumber
        }).then(() => {
            navigate('/read')
        })
    }
 

    return (
    <div>
         <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Occupation</label>
            <input placeholder='Occupation' onChange={(e) => setOccupation(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Phone Number</label>
            <input placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label= 'I agree to the Terms and Conditions'  onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
   
    </div>
    );
}

export default CreateFormPage
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


function UpdatePage() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState(false);
    const [occupation, setOccupation] = useState(false);
    const [phonenumber, setPhoneNumber] = useState(false);
    
     
    useEffect(() => {
        setID(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setOccupation(localStorage.getItem('Occupation'));
        setPhoneNumber(localStorage.getItem('Phone Number'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
   

const updateAPIData = () => {
    axios.put(`https://6376494781a568fc25fad6f7.mockapi.io/crudironhack/${id}`, {
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

    return(
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Occupation</label>
                    <input placeholder='Occupation' value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type= 'submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}


export default UpdatePage
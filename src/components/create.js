import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';

function Create() {
    return (
    <div>
         <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='Nome' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Sobrenome' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='Concordo com as condições' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
   
    </div>
    );
}

export default Create
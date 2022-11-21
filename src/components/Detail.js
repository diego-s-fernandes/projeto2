import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {Table } from 'semantic-ui-react';
import axios from 'axios';






function Detail () {
    const navigate = useNavigate();
    const {data} = useParams()
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://6376494781a568fc25fad6f7.mockapi.io/crudironhack`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox, email, occupation, phonenumber } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Occupation', occupation);
        localStorage.setItem('Phone Number', phonenumber);
        localStorage.setItem('Checkbox Value', checkbox)}

    
        

        const fetchDetails =(id) => {
            fetch(`https://6376494781a568fc25fad6f7.mockapi.io/crudironhack/${id}`)
            .then((fetchDetails) => {
              setAPIData(fetchDetails.data);
          })
  }

        
   
      useEffect (() => {
        fetchDetails()

      },[])    


    return (

  <div>
    <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Fist Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Occupation</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Check Box Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.occupation}</Table.Cell>
                                <Table.Cell>{data.phonenumber }</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                              
                            </Table.Row>
                
                </Table.Body>
            </Table>
       
  </div>
    )

}

export default Detail
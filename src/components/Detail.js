
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const Detail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams(); //string
 

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch(`https://6376494781a568fc25fad6f7.mockapi.io/crudironhack/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("res error");
        }
      })
      .then((data) => {
        
        setUser(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div>
          {
            <div>
            <h3>{user.fistName}</h3>
              <h3>{user.lastName}</h3>
              <h3>{user.email}</h3>
              <h3>{user.occupation}</h3>
              <h3>{user.phonenumber}</h3>
                          
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Detail;
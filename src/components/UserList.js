import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

const UserList = () => {
 const [users, setusers] = useState([]);


 useEffect(() => {
try {
   
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setusers(res.data);
        });
} catch (error) {
    console.log(error);
    
}           
}, []);

    return (
    <div>
       <h1>API </h1>
        {users.map((el) => (
            <div className='container'>
                <Card className="text-center"  >
      <Card.Header><h2>{el.name}</h2></Card.Header>
      <Card.Body>
        <Card.Title>{el.username}</Card.Title>
        <Card.Text>
        {el.email},<br/>
        {el.phone}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
            </div>
        ))}
    </div>
  )
}

export default UserList
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

//Import components needed for the project.

const Home = () => { //functional component react, Home.


const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [users, setUsers] = useState([]);
    // useState() is used here, const [state, set state] = useState(Initial State).

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
    //useEffect hook is used, and fetch url, convert to json file.
            )
      }, []) //[] is only called for once.
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map(user => (
                <div className="card">
               
                  <div className="container">
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <p>{user.website}</p>
                    <Link to={`user/${user.id}`}>
                        <button className ="button"><span>More Info</span></button>

                    </Link>
                </div>
                
              </div>
                ))}
            </ul>
        
        );
    }
}
export default Home;

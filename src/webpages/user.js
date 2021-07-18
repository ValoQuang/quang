import React, { useState, useEffect }  from 'react';
const User = props => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userCompany, setUserCompany] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setUser(data);
                    setUserAddress(data.address);
                    setUserCompany(data.company);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (user) {
        return (
            <div className ="usercontent">
                <div>
                    Name: {user.name}
                </div>
                <div>
                    Email: {user.email}
                </div>
                <div>
                    Phone: {user.phone}
                </div>
                <div>
                    Website: {user.website}
                </div>  
                <div>
                    Company: {userCompany.name}
                </div> 
                <div>
                    Address: 
                    <ul>
                        <li>{userAddress.street}</li> 
                        <li>{userAddress.suite}</li>
                        <li>{userAddress.city}</li>
                        <li>{userAddress.zipcode}</li>  
                    </ul> 
                </div>
                
          </div>
        );
    }
}
export default User;
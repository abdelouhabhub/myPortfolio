
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate('/');
    };
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <div>{user?.username}</div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;

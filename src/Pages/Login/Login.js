import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div id='login'>
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;
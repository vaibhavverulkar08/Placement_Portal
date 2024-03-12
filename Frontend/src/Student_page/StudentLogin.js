import React from 'react';
import './StudentLogin.css';

const StudentLogin = () => {
    return (
        <div className="student-login-container">
            <div className="header">
                <h1>PLACEMENT PORTAL</h1>
            </div>
            <div className="content-container">
                <div className="left-container"></div>
                <div className="right-container">
                    <h2>Login</h2>
                    <form>
                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;

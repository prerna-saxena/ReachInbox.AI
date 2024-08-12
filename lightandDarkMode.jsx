// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Onebox from './Onebox';
import Reply from './Reply';

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`app-container ${theme}`}>
            <Router>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/onebox" element={<Onebox />} />
                    <Route path="/reply/:threadId" element={<Reply />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

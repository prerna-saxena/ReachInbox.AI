import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Onebox.css';

const Onebox = () => {
    const [threads, setThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/onebox/list');
                setThreads(response.data);
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (threadId) => {
        try {
            await axios.delete(`/onebox/${threadId}`);
            setThreads(threads.filter(thread => thread.id !== threadId));
        } catch (error) {
            console.error('Error deleting thread:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'D') {
            handleDelete(selectedThread);
        }
        if (event.key === 'R') {
            // Open Reply box logic
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedThread]);

    return (
        <div className="onebox-container">
            {threads.map(thread => (
                <div key={thread.id} onClick={() => setSelectedThread(thread.id)}>
                    {thread.subject}
                    <button onClick={() => handleDelete(thread.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Onebox;

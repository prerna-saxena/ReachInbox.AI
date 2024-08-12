// Reply.js
import React, { useState } from 'react';
import axios from 'axios';
import CustomEditor from './CustomEditor';

const Reply = ({ threadId, onReplySent }) => {
    const [emailData, setEmailData] = useState({
        from: '',
        to: '',
        subject: '',
        body: ''
    });

    const handleSend = () => {
        axios.post(`/reply/${threadId}`, emailData)
            .then(() => onReplySent())
            .catch(error => console.error(error));
    };

    const handleSave = (body) => {
        setEmailData({ ...emailData, body });
    };

    return (
        <div className="reply-container">
            <input
                type="email"
                value={emailData.from}
                onChange={(e) => setEmailData({ ...emailData, from: e.target.value })}
                placeholder="From"
            />
            <input
                type="email"
                value={emailData.to}
                onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                placeholder="To"
            />
            <input
                type="text"
                value={emailData.subject}
                onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                placeholder="Subject"
            />
            <CustomEditor onSave={handleSave} onInsertVariable={() => {}} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Reply;


// CustomEditor.js
import React, { useState } from 'react';

const CustomEditor = ({ onSave, onInsertVariable }) => {
    const [content, setContent] = useState('');

    const handleSave = () => {
        onSave(content);
    };

    const handleInsertVariable = () => {
        const variable = prompt("Enter the variable name:");
        setContent(content + `{${variable}}`);
    };

    return (
        <div className="editor-container">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSave}>SAVE</button>
            <button onClick={handleInsertVariable}>Variables</button>
        </div>
    );
};

export default CustomEditor;

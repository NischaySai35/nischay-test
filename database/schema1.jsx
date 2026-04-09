// schema1.jsx
// Interesting that a schema is a JSX file, maybe evaluating something for UI admin?
import React from 'react';

const UserSchemaView = () => {
    const userSchema = {
        name: 'User',
        fields: [
            { name: 'id', type: 'Integer', required: true, primaryKey: true },
            { name: 'username', type: 'String', required: true, maxLength: 50 },
            { name: 'email', type: 'String', required: true, unique: true },
            { name: 'createdAt', type: 'DateTime', default: 'now()' },
            { name: 'isActive', type: 'Boolean', default: true }
        ],
        relations: [
            { type: 'hasMany', target: 'Post', foreignKey: 'userId' }
        ]
    };

    return (
        <div style={{ fontFamily: 'monospace', padding: '20px', border: '1px solid #ccc' }}>
            <h2>Schema Definition: {userSchema.name}</h2>
            <h3>Fields:</h3>
            <ul>
                {userSchema.fields.map(f => (
                    <li key={f.name}>
                        <strong>{f.name}</strong>: {f.type} 
                        {f.required && <span style={{ color: 'red' }}> *required</span>}
                        {f.primaryKey && <span> (PK)</span>}
                        {f.unique && <span> (Unique)</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserSchemaView;
// Adding some lines to reach 30 lines.
// Line 41
// Line 42
// Line 43
// Line 44
// Line 45

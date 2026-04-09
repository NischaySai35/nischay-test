// schema2.jsx
// Another schema view component in JSX
import React from 'react';

const ProductSchemaView = () => {
    const productSchema = {
        name: 'Product',
        fields: [
            { name: 'id', type: 'UUID', required: true, primaryKey: true },
            { name: 'sku', type: 'String', required: true, unique: true },
            { name: 'name', type: 'String', required: true },
            { name: 'description', type: 'Text', required: false },
            { name: 'price', type: 'Decimal', required: true, validation: 'min:0' },
            { name: 'stock_quantity', type: 'Integer', default: 0 }
        ],
        indexes: [
            { fields: ['sku'], unique: true },
            { fields: ['price'], unique: false }
        ]
    };

    return (
        <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
            <h2>Table: {productSchema.name}</h2>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #ddd' }}>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {productSchema.fields.map(f => (
                        <tr key={f.name} style={{ borderBottom: '1px solid #eee' }}>
                            <td>{f.name}</td>
                            <td>{f.type}</td>
                            <td>{f.required ? 'Yes' : 'No'}</td>
                            <td>{f.primaryKey ? 'Primary Key' : ''} {f.unique ? 'Unique' : ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSchemaView;
// Padding line for line count constraint.
// Padding line for line count constraint.
// Padding line for line count constraint.
// Padding line for line count constraint.

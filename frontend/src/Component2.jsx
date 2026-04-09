import React, { useState } from 'react';

const Component2 = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formState);
        setSubmitted(true);
        // Reset form
        setTimeout(() => {
            setFormState({ name: '', email: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Contact Us</h2>
            {submitted ? (
                <div style={{ background: '#d4edda', color: '#155724', padding: '15px', borderRadius: '4px' }}>
                    Thank you for your message. We will get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formState.name} 
                            onChange={handleChange} 
                            required 
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formState.email} 
                            onChange={handleChange} 
                            required 
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formState.message} 
                            onChange={handleChange} 
                            required 
                            rows="4" 
                            style={{ width: '100%', padding: '8px' }}
                        ></textarea>
                    </div>
                    <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default Component2;

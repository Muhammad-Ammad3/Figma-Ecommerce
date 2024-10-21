import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log(formData); 
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',

        });
        if(handleSubmit){
            Swal.fire("Thank You ");        }
           
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 w-fit">
            <label className="block mb-2 text-md font-medium py-6" htmlFor="name">Your Name</label>
            <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc" 
                className="block w-96 h-16 p-2 border border-gray-300 rounded mb-4" 
            />
            
            <label className="block mb-2 text-md font-medium py-6" htmlFor="email">Email Address</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Abc@gmail.com" 
                className="block w-96 h-16 p-2 border border-gray-300 rounded mb-4" 
            />
            
            <label className="block mb-2 text-md font-medium py-6" htmlFor="subject">Subject</label>
            <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is optional" 
                className="block w-96 h-16 p-2 border border-gray-300 rounded mb-4" 
            />
            
            <label className="block mb-2 text-md font-medium py-6" htmlFor="message">Message</label>
            <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! I'd like to ask about" 
                className="block w-96 h-24 p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            
            <button 
                type="button" 
                onClick={handleSubmit} 
                className="w-44 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
            >
                Submit
            </button>
        </div>
    );
};

export default ContactForm;

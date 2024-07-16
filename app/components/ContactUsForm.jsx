'use client'

import { useState } from "react";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({
            ...formStatus,
            submitting: true
        });

        try {
            // Simulate a delay for demo purposes (replace with actual submission logic)
            await new Promise(resolve => setTimeout(resolve, 1500));
            setFormStatus({
                submitting: false,
                submitted: true,
                error: null
            });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setFormStatus({
                submitting: false,
                submitted: false,
                error: 'An error occurred. Please try again later.'
            });
        }
    };

    return ( 
        <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    {formStatus.submitted ? (
                        <div className="text-center">
                            <p className="text-lg mb-4">Thank you for your message!</p>
                            <p>We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    disabled={formStatus.submitting}
                                >
                                    {formStatus.submitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                            {formStatus.error && (
                                <p className="text-red-500">{formStatus.error}</p>
                            )}
                        </form>
                    )}
                </div>
            </div>
     );
}
 
export default ContactUsForm;
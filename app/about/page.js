// pages/about.js

import Head from 'next/head';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>About Us - Your Company Name</title>
                <meta name="description" content="Learn more about our company and what we do." />
            </Head>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg mb-4">
                        Welcome to Your Company Name, where we strive to make a difference in...
                    </p>
                    <p className="text-lg mb-4">
                        Our mission is to provide high-quality products/services and...
                    </p>
                    <p className="text-lg mb-4">
                        Founded in [year], we have grown steadily and are proud to serve...
                    </p>
                    <p className="text-lg">
                        Contact us at contact@yourcompany.com for more information or inquiries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

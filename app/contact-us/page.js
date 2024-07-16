import ContactUsForm from "../components/ContactUsForm";

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with us to learn more about our services and how we can help you.',
};

const Contact = () => {

    return (
        <div className="bg-gray-100 min-h-screen">
            <ContactUsForm />
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage('Correo enviado exitosamente!');
                // Limpiar el formulario después de enviar el correo exitosamente
                setFormData({
                    email: '',
                    name: '',
                    message: ''
                });
            } else {
                setStatusMessage('Hubo un problema al enviar el correo.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('Hubo un problema con el servidor.');
        }
    };

    return (
        <section className="py-16 text-white bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
            <div className="max-w-3xl px-6 mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold">Contact Me !!</h2>
                <p className="mb-10 text-lg">Feel free to reach out to me for any questions or opportunities!</p>
                <form
                    className="p-8 rounded-lg shadow-lg bg-gradient-to-b from-blue-800 to-blue-900"
                    onSubmit={handleSubmit}
                >
                    <h3 className="mb-4 text-xl font-semibold">Email Me <span role="img" aria-label="rocket">🚀</span></h3>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 bg-blue-900 border border-blue-700 rounded focus:outline-none focus:border-blue-500"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 bg-blue-900 border border-blue-700 rounded focus:outline-none focus:border-blue-500"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="w-full h-32 p-3 bg-blue-900 border border-blue-700 rounded resize-none focus:outline-none focus:border-blue-500"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 transition-colors duration-300 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
                    >
                        Send
                    </button>
                </form>
                {statusMessage && <p className="mt-4">{statusMessage}</p>}
            </div>
            <footer className="mt-16">
                <div className="max-w-3xl px-6 mx-auto text-center">
                    <h4 className="mb-4 text-lg font-semibold">Connect with Me !!</h4>
                    <div className="flex justify-center mb-6 space-x-6">
                        <a href="#about" className="hover:text-blue-400">About</a>
                        <a href="#skills" className="hover:text-blue-400">Skills</a>
                        <a href="#experience" className="hover:text-blue-400">Experience</a>
                        <a href="#projects" className="hover:text-blue-400">Projects</a>
                        <a href="#education" className="hover:text-blue-400">Education</a>
                    </div>
                    <div className="flex justify-center space-x-6 text-2xl">
                        <a href="https://facebook.com" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;

import "./css/contact.css";
import React, { useState } from "react";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		message: "",
	});

	const [statusMessage, setStatusMessage] = useState("");

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Función para desplazarse a la sección con scroll suave
	// const handleNavClick = (section: string) => {
	// 	const element = document.getElementById(section);
	// 	if (element) {
	// 		element.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch(
				"https://angel-dev-portfolio.netlify.app/.netlify/functions/send-email",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setStatusMessage("Correo enviado exitosamente!");
				setFormData({
					email: "",
					name: "",
					message: "",
				});
			} else {
				setStatusMessage("Hubo un problema al enviar el correo.");
			}
		} catch (error) {
			console.error("Error:", error);
			setStatusMessage("Hubo un problema con el servidor.");
		}
	};

	return (
		<section
			id="contact"
			className="py-16 text-white"
			style={{ backgroundColor: "rgb(28, 28, 39)" }}
		>
			<div className="max-w-3xl px-6 mx-auto text-center">
				<h2 className="mb-6 text-3xl font-bold">Contact Me !!</h2>
				<p className="mb-10 text-lg">
					Feel free to reach out to me for any questions or opportunities!
				</p>
				<div className="flex items-center justify-center p-4">
					<form className="custom-form" onSubmit={handleSubmit}>
						<h3 className="mb-4 text-xl font-semibold text-white">
							Email Me{" "}
							<span role="img" aria-label="rocket">
								🚀
							</span>
						</h3>
						<div className="mb-6">
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								className="w-full p-3 bg-[#171721] border border-[rgb(177,178,179)] rounded focus:outline-none focus:border-blue-500 text-white"
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
								className="w-full p-3 bg-[#171721] border border-[rgb(177,178,179)] rounded focus:outline-none focus:border-blue-500 text-white"
								value={formData.name}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="mb-6">
							<textarea
								name="message"
								placeholder="Message"
								className="w-full h-32 p-3 bg-[#171721] border border-[rgb(177,178,179)] rounded resize-none focus:outline-none focus:border-blue-500 text-white"
								value={formData.message}
								onChange={handleInputChange}
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full p-3 transition-colors duration-300 bg-[#171721] border border-blue-500 rounded hover:bg-blue-600 focus:outline-none text-white"
						>
							Send
						</button>
					</form>
				</div>

				{statusMessage && <p className="mt-4">{statusMessage}</p>}
			</div>
			<footer className="mt-16">
				<div className="max-w-3xl px-6 mx-auto text-center">
					<h4 className="mb-4 text-lg font-semibold">Connect with Me !!</h4>
					{/* <div className="flex justify-center mb-6 space-x-2 md:space-x-6">
						<a
							href="#about"
							onClick={() => handleNavClick("about")}
							className="hover:text-blue-400"
						>
							About
						</a>
						<a
							href="#skills"
							onClick={() => handleNavClick("skills")}
							className="hover:text-blue-400"
						>
							Skills
						</a>
						<a
							href="#experience"
							onClick={() => handleNavClick("experience")}
							className="hover:text-blue-400"
						>
							Experience
						</a>
						<a
							href="#projects"
							onClick={() => handleNavClick("projects")}
							className="hover:text-blue-400"
						>
							Projects
						</a>
						<a
							href="#education"
							onClick={() => handleNavClick("education")}
							className="hover:text-blue-400"
						>
							Education
						</a>
					</div> */}

					<div className="flex justify-center space-x-6 text-2xl">
						<a href="https://facebook.com" className="hover:text-blue-400">
							<i className="fab fa-facebook"></i>
						</a>
						<a href="https://twitter.com" className="hover:text-blue-400">
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/gabriel-zapata-239501287/"
							className="hover:text-blue-400"
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://instagram.com" className="hover:text-blue-400">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Contact;

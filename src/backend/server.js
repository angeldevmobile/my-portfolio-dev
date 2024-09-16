const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limitar a 100 solicitudes por IP cada 15 minutos
});
app.use(limiter);

// Ruta para manejar el envío de correos
app.post("/send-email", (req, res) => {
  const { email, name, message } = req.body;

  // Configuración del transportador de correo usando las variables de entorno
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, 
    to: "zapata.axuariogabriel@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    text: message,
    replyTo: email, 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Error al enviar el correo" });
    } else {
      console.log("Correo enviado: " + info.response);
      return res.status(200).json({ message: "Correo enviado exitosamente" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

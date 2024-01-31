const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const express = require("express");

// // initialize nodemailer
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "your_email@gmail.com",
//     pass: "password_for_your_email_address",
//   },
// });

// // point to the template folder
// const handlebarOptions = {
//   viewEngine: {
//     partialsDir: path.resolve("./views/"),
//     defaultLayout: false,
//   },
//   viewPath: path.resolve("./views/"),
// };

// // use a template file with nodemailer
// transporter.use("compile", hbs(handlebarOptions));

// const mailOptions = {
//   from: '"My Company" <my@company.com>', // sender address
//   template: "email", // the name of the template file, i.e., email.handlebars
//   to: "ronaldosunmu@gmail.com",
//   subject: `Welcome to My Company, Ronald`,
//   context: {
//     name: "Ronald",
//     company: "my company",
//   },
// };
// try {
//   await transporter.sendMail(mailOptions);
// } catch (error) {
//   console.log(`Nodemailer error sending email to ${user.email}`, error);
// }

const app = express();
app.use(express.json());

app.post("/kelani-contact-us", (req, res) => {
  const { name, email, phone, message } = req.body;

  return console.log(req.body);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

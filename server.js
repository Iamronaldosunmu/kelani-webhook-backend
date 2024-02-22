const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
console.log(process.env.APP_EMAIL_ADDRESS);
console.log(process.env.APP_EMAIL_PASSWORD);
// app.set("view engine", "handlebars");

// app.engine(
//   "handlebars",
//   handlebars.engine({
//     layoutsDir: __dirname + "/views",
//   })
// );

// app.set("views", path.join(__dirname, "views"));
// // initialize nodemailer
var transporter = nodemailer.createTransport({
  host: "mail.kelani.ng",
  // secure: true,
  port: 465,
  auth: {
    // user: "richardosunmu@gmail.com",
    // pass: "rwtabhpraywtznck",
    user: process.env.APP_EMAIL_ADDRESS,
    pass: process.env.APP_EMAIL_PASSWORD,
  },
});

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    extname: ".handlebars",
    partialsDir: path.resolve("./views/"),
    layoutsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
  extName: ".handlebars",
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));

// const mailOptions = {
//   from: 'Kelani', // sender address
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

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/kelani-contact-us", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["Name"];
    const user = {
      name,
      email: req.body.data.rows[0]["Email"],
    };

    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "We got your message",
      template: "kelani-contact-us", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-power-contact-us", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["Name"];
    const user = {
      name,
      email: req.body.data.rows[0]["Email"],
    };

    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "We got your message",
      template: "kelani-power-contact-us", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-engineering-contact-us", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["Name"];
    const user = {
      name,
      email: req.body.data.rows[0]["Email"],
    };

    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "We got your message",
      template: "kelani-power-contact-us", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-consulting-contact-us", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["Name"];
    const user = {
      name,
      email: req.body.data.rows[0]["Email"],
    };

    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "We got your message",
      template: "kelani-power-contact-us", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-power-cta", async (req, res) => {
  try {
    const user = {
      name: "Ronald Dosunmu",
      email: "ronaldosunmu@gmail.com",
    };

    const mailOptions = {
      from: "richardosunmu@gmail.com",
      to: user.email,
      subject: "Welcome to Our Platform",
      template: "contact-us", //Use the rendered HTML from the template
    };
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

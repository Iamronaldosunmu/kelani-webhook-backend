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

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Contact Us Form Submission",
      template: "kelani-contact-us-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email,
        message: req.body.data.rows[0]["Message"],
        branch: "",
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
    await transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
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
    const email = req.body.data.rows[0]["Email"];
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

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Contact Us Form Submission",
      template: "kelani-contact-us-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email,
        message: req.body.data.rows[0]["Message"],
        branch: "Power",
      },
    };

    // Send email using Nodemailer
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
      }
    });
    await transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
      }
    });

    return res.status(200).send("Email sent successfully");
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
      template: "kelani-engineering-contact-us", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Contact Us Form Submission",
      template: "kelani-contact-us-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email,
        message: req.body.data.rows[0]["Message"],
        branch: "Engineering",
      },
    };

    // Send email using Nodemailer
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
    await transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
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

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Contact Us Form Submission",
      template: "kelani-contact-us-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email,
        message: req.body.data.rows[0]["Message"],
        branch: "Consulting",
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
    await transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-power-cta", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["name"];
    const user = {
      name,
      email: req.body.data.rows[0]["email"],
    };
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "Thank You for Choosing Kelani Power!",
      template: "kelani-power-cta-response", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Inquiry - Kelani Power Call to Action Form",
      template: "kelani-power-cta-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email: req.body.data.rows[0]["email"],
        phoneNumber: req.body.data.rows[0]["phoneNumber"],
        need: req.body.data.rows[0]["businessNeed"],
        businessName: req.body.data.rows[0]["businessName"],
        loadType: req.body.data.rows[0]["loadType"],
        averageMonthlyConsumption:
          req.body.data.rows[0]["averageMonthlyConsumption"],
        lastMonthUtilityBill: req.body.data.rows[0]["lastMonthUtilityBill"],
        hoursOfPower: req.body.data.rows[0]["hoursOfPowerRequired"],
        ownedPowerSources: req.body.data.rows[0]["ownedPowerSources"],
      },
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
    transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-consulting-cta", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["name"];
    const user = {
      name,
      email: req.body.data.rows[0]["email"],
    };
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "Thank You for Choosing Kelani Power!",
      template: "kelani-consulting-cta-response", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Inquiry - Kelani Power Call to Action Form",
      template: "kelani-consulting-cta-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email: req.body.data.rows[0]["email"],
        phoneNumber: req.body.data.rows[0]["phoneNumber"],
        businessName: req.body.data.rows[0]["companyName"],
        industry: req.body.data.rows[0]["industry"],
        companySize:
          req.body.data.rows[0]["companySize"],
        positionsToFill: req.body.data.rows[0]["positionsToFill"],
        typeOfHiringNeeds: req.body.data.rows[0]["typeOfHiringNeeds"],
        urgencyOfHiring: req.body.data.rows[0]["urgencyOfHiring"],
        additionalInformation: req.body.data.rows[0]["additionalInformation"],
        specificDetailsRelatedToHiringNeeds: req.body.data.rows[0]["specificDetailsRelatedToHiringNeeds"],
      },
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
    transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/kelani-engineering-cta", async (req, res) => {
  try {
    const name = req.body.data.rows[0]["name"];
    const user = {
      name,
      email: req.body.data.rows[0]["email"],
    };
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: user.email,
      subject: "Thank You for Choosing Kelani Engineering!",
      template: "kelani-engineering-cta-response", //Use the rendered HTML from the template
      context: {
        name,
      },
    };

    const backendMailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Inquiry - Kelani Power Call to Action Form",
      template: "kelani-engineering-cta-backend-response", //Use the rendered HTML from the template
      context: {
        name,
        email: req.body.data.rows[0]["email"],
        phoneNumber: req.body.data.rows[0]["phoneNumber"],
        businessName: req.body.data.rows[0]["companyName"],
        industry: req.body.data.rows[0]["industry"],
        need:
          req.body.data.rows[0]["need"],
        address: req.body.data.rows[0]["address"],
        city: req.body.data.rows[0]["city"],
        state: req.body.data.rows[0]["state"],
        productOfInterest: req.body.data.rows[0]["productOfInterest"],
        message: req.body.data.rows[0]["message"],
      },
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
    transporter.sendMail(backendMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

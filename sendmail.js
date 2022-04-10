const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

// initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "17tucs221@skct.edu.in",
    pass: "shiyaam123456789",
  },
});

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));

var mailOptions = {
  from: '"Resource" <adebola.rb.js@gmail.com>', // sender address
  to: "17tucs221@skct.edu.in", // list of receivers
  subject: "Welcome!",
  template: "email", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
  attachments: [{ filename: "aa.jpg", path: "./attachments/aa.jpg" }],
};

// trigger the sending of the E-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: " + info.response);
});

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "17tucs221@skct.edu.in",
//     pass: "shiyaam123456789",
//   },
// });

// var mailOptions = {
//   from: "17tucs221@skct.edu.in",
//   to: "17tucs221@skct.edu.in",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// console.log("hello");

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

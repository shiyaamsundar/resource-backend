const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "help.neolearn@gmail.com",
    pass: "neolearn2304",
  },
});

app.post("/send", function (req, res) {
  var mailOptions = {
    from: "help.neolearn@gmail.com",
    to: `${req.body.email}`,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    html: `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        table, td, div, h1, p {font-family: Arial, sans-serif;}
      </style>
    </head>
    <body style="margin:0;padding:0;">
      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
        <tr>
          <td align="center" style="padding:0;">
            <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
              <tr>
                <td align="center" style="padding:40px 0 30px 0;background:#142846;">
                  <img src="https://sleeknote.com/wp-content/uploads/2020/04/E-Commerce-Welcome-Email-Examples-Twitter.jpg" alt="" width="300" style="height:auto;display:block;" />
                </td>
              </tr>
              <tr>
                <td style="padding:36px 30px 42px 30px;">
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                    <tr>
                      <td style="padding:0 0 36px 0;color:#153643;">
                        <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Welcome  to NeoLearn!</h1>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                        Thanks for signing up for Neo Learn. We will help you to make your learning journey more awesome & we feel delighted to guide you to the Neo Future. </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0;">
                        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                          <tr>
                            <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                              <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://assets.codepen.io/210284/right.gif" alt="" width="260" style="height:auto;display:block;" /></p>
                              <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><b>How are we better? </b><br/> As we are investing lot of time into searching for the right course rather than actually learning it... We are here to remove the search part for you.</p>
                            </td>
                            <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                            <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                              <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://assets.codepen.io/210284/left.gif" alt="" width="260" style="height:auto;display:block;" /></p>
                              <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><b>Why trust our courses curations? </b><br/> Our entire course collection is build by actual people working on that sector so these course curations will help you to achieve your career goal much faster and easier</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:30px;background:#142846;">
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                    <tr>
                      <td style="padding:0;width:50%;" align="left">
                        <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                           <img src="https://res.cloudinary.com/dg9gicndn/image/upload/v1649569527/neolearn/Frame_273_pylcre.png" alt="Neo Learn" width="110" height="50" style="height:auto;display:block;border:0;" />
                           <br/>
                        </p>
                      </td>
                      <td style="padding:0;width:50%;" align="right">
                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                          <tr>
                            <td style="padding:0 0 0 10px;width:38px;">
                              <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://res.cloudinary.com/dg9gicndn/image/upload/v1649588882/neolearn/Vector_14_ylluto.png" alt="Twitter" width="28" style="height:auto;display:block;border:0;" /></a>
                            </td>
                            <td style="padding:0 0 0 10px;width:38px;">
                              <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://res.cloudinary.com/dg9gicndn/image/upload/v1649588882/neolearn/Vector_15_plgqqt.png" alt="Twitter" width="28" style="height:auto;display:block;border:0;" /></a>
                            </td>
                            <td style="padding:0 0 0 10px;width:38px;">
                              <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://res.cloudinary.com/dg9gicndn/image/upload/v1649588882/neolearn/Vector_13_ztekqh.png" alt="Facebook" width="28" style="height:auto;display:block;border:0;" /></a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

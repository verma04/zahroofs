const express = require("express");
const router = express.Router();

const sgMail = require("@sendgrid/mail");
function routes(app) {

router.post("/formEnquiry", (req, res) => {

    
  

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
   
    
    const msg = {
      to: 'sales@zahroofvalves.com',
      from: 'sales@zahroofvalves.com',
      subject: "Contactus form  Website ",
    
      html: `
   
    
    <p>   Name: ${req.body.Name}  ${req.body.Last} <p/> 
    <p>   Email: ${req.body.Email}  <p/>
    <p>    Phone Number: ${req.body.Number}  <p/>
    <p>    Location: ${req.body.Location}  <p/>
    <p>    Location: ${req.body.Company}  <p/>
    <p>   Company Name: ${req.body.Company} <p/>P
    <p>    Message: ${req.body.Comment} <p/>
    
  
    
    </div>`
    };
    sgMail.send(msg).catch(err => {
        if(err) {
      console.log(err);
        }
        
    });

    console.log("dsd")
    res.json("succces")
});



router.post("/makethecall", (req, res) => {

    
  

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
 
  
  const msg = {
    to: 'sales@zahroofvalves.com',
    from: 'sales@zahroofvalves.com',
    subject: "Make the call",
  
    html: `
 
  
  <p>   Name: ${req.body.Name}   <p/> 
  <p>   Email: ${req.body.Email}  <p/>
  <p>    Department: ${req.body.Department}  <p/>
  <p>    Subject: ${req.body.Subject}  <p/>

  <p>    Message: ${req.body.Message} <p/>
  

  
  </div>`
  };
  sgMail.send(msg).catch(err => {
      if(err) {
    console.log(err);
      }
      
  });

  console.log("dsd")
  res.json("succces")
});






        
 




      
return router;
};

module.exports = routes;

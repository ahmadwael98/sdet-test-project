
module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php',
  elements: {
    contactUs: '#contact-link',
    subjectHeading: '#id_contact',              
    emailField: '#email',                      
    orderReferenceField: '#id_order',            
    messageField: '#message',                    
    fileUpload: '#fileUpload',                   
    submitButton: '#submitMessage',              
    successMessage: '.alert-success',            
    errorMessage: '.alert-danger'                
  },
  commands: [{
    fillOutForm(subject, email, order, message, filePath = '') {
     
        
        if (subject) {
          this.setValue('@subjectHeading',subject) 
      }
  
      this
        .setValue('@emailField', email)          
        .setValue('@orderReferenceField', order)  
        .setValue('@messageField', message);      

      if (filePath) {
        this.setValue('@fileUpload', require('path').resolve(__dirname, filePath)); 
      }

      this
        .pause(1000)                               
        .click('@submitButton');                 
      return this;
    }
  }]
};


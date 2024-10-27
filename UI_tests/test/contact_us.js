module.exports = {

    'Contact Us - Valid Submission': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        var fs = require('fs');
        var files = fs.readdirSync('./test files')
        for (var file in files){
        contactUsPage
            .navigate()
            .click('@contactUs')
            .pause(100)
            .fillOutForm('Webmaster', 'ahmad@example.com', '12345', 'This is a valid test message.', '../test files/' + files[file])
            .pause(1000)
            .assert.visible('@successMessage')
            
        }
    },
    'Contact Us - Invalid File Upload': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        var fs = require('fs');
        var files = fs.readdirSync('./Unsupported test files')
        for (var file in files) {
            contactUsPage
                .navigate()
                .click('@contactUs')
                .pause(100)
                .fillOutForm('Webmaster', 'ahmad@example.com', '12345', 'This message includes an invalid file.', '../Unsupported test files/' + files[file])
                .pause(1000)
                .assert.visible('@errorMessage')
        }
    },
    'Contact Us - Invalid Email Format': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        const invalidEmails = ['ahmad.sedik', 'ahmad@sedik', 'ahmad@sedik.', 'ahmad@.com'];
        for (var email in invalidEmails) {
            contactUsPage
                .navigate()
                .click('@contactUs')
                .pause(100)
                .fillOutForm('Webmaster', invalidEmails[email], '12345', 'This message has an invalid email.')
                .pause(1000)
                .assert.visible('@errorMessage')
                .clearValue('@emailField');
        };
        browser.end();
    },

    'Contact Us - Missing Email': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        contactUsPage
            .navigate()
            .click('@contactUs')
            .pause(100)
            .fillOutForm('Webmaster', '', '12345', 'This message has no email.')
            .pause(1000)
            .assert.visible('@errorMessage')
            .end();
    },

    'Contact Us - Invalid Order Reference': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        contactUsPage
            .navigate()
            .click('@contactUs')
            .pause(100)
            .fillOutForm('Webmaster', 'ahmad@example.com', '', 'This message has no order reference.')
            .pause(1000)
            .assert.visible('@successMessage')
            .end();
    },

    'Contact Us - Missing Message': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        contactUsPage
            .navigate()
            .click('@contactUs')
            .pause(100)
            .fillOutForm('Customer service', 'ahmad@example.com', '12345', '')
            .pause(1000)
            .assert.visible('@errorMessage')
            .end();
    },

    'Contact Us - Successful Submission without File Upload': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        contactUsPage
            .navigate()
            .click('@contactUs')
            .pause(100)
            .fillOutForm('Customer service', 'ahmad@example.com', '54321', 'This is another test message.')
            .pause(1000)
            .assert.visible('@successMessage')
            .end();
    },

    'Contact Us - No Subject Heading': function (browser) {
        const contactUsPage = browser.page.contact_us_objects();
        contactUsPage
            .navigate()
            .click('@contactUs')
            .pause(100)
            .fillOutForm('', 'ahmad@example.com', '12345', 'This message has no subject heading.')
            .pause(1000)
            .assert.visible('@errorMessage')
            .end();
    },
};

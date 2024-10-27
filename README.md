say-hello-workflow

# sdet-test-project
Test Cases for contact us
1. Contact Us - Valid Submission
•	Objective: Verify that a valid form submission is successful.
•	Input:
o	Name: Webmaster
o	Email: ahmad@example.com
o	Order Reference: 12345
o	Message: This is a valid test message.
o	File: Valid files from ./test files/
•	Expected Result: Success message is displayed.
•	Notes: Ensure files in the ./test files/ directory are valid for submission.
2. Contact Us - Invalid File Upload
•	Objective: Verify that submitting an invalid file shows an error message.
•	Input:
o	Name: Webmaster
o	Email: ahmad@example.com
o	Order Reference: 12345
o	Message: This message includes an invalid file.
o	File: Invalid files from ./Unsupported test files/
•	Expected Result: Error message is displayed.
•	Notes: Ensure files in the ./Unsupported test files/ directory are invalid.
3. Contact Us - Invalid Email Format
•	Objective: Check the behavior for various invalid email formats.
•	Input:
o	Name: Webmaster
o	Email: ahmad.sedik, ahmad@sedik, ahmad@sedik., ahmad@.com
	Order Reference: 12345
o	Message: This message has an invalid email.
•	Expected Result: Error message is displayed for each invalid email.
•	Notes: Ensure to clear the email field after each iteration.
4. Contact Us - Missing Email
•	Objective: Verify that submitting a form without an email shows an error message.
•	Input:
o	Name: Webmaster
o	Email: ``
o	Order Reference: 12345
o	Message: This message has no email.
•	Expected Result: Error message is displayed.
5. Contact Us - Invalid Order Reference
•	Objective: Verify that submitting a form without an order reference shows a success message.
•	Input:
o	Name: Webmaster
o	Email: ahmad@example.com
o	Order Reference: ``
o	Message: This message has no order reference.
•	Expected Result: Success message is displayed.
6. Contact Us - Missing Message
•	Objective: Check that submitting a form without a message shows an error message.
•	Input:
o	Name: Customer service
o	Email: ahmad@example.com
o	Order Reference: 12345
o	Message: ``
•	Expected Result: Error message is displayed.
7. Contact Us - Successful Submission without File Upload
•	Objective: Verify that a valid form submission without file upload is successful.
•	Input:
o	Name: Customer service
o	Email: ahmad@example.com
o	Order Reference: 54321
o	Message: This is another test message.
•	Expected Result: Success message is displayed.
8. Contact Us - No Subject Heading
•	Objective: Verify that submitting a form without a subject heading shows an error message.
•	Input:
o	Name: ``
o	Email: ahmad@example.com
o	Order Reference: 12345
o	Message: This message has no subject heading.
•	Expected Result: Error message is displayed.



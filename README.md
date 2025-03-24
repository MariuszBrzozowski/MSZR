# Description
Test solution for https://candymapper.com/
- test execution: npx playwright test

# Test Scope
- MSZR - Should load CandyMapper Home page > basic assertion for home page
- MSZR - Should load CandyMapper Join Us page / MSZR - Should load CandyMapper Halloween Party page > example of web page navigation
- MSZR - Should Slider Challenge country selection > example of drop down list selection usage
- MSZR - Should fill up contact us form with correct data / MSZR - Should reject invalid data from contact us form > example of data form handling

# IMPROVEMENTS
- MSZR - Should Slider Challenge country selection - test could use reference predefined test data to iterate via all options, this will require to rebuild test logic.
- Contact us form data input validation can be more precise but we need to confirm exact requirements, right now it's only assumption of email format validation.
- Mobile view port tests can be added but it will require to implement generic handler for header menu as it's different on that view port.

Author - Harry
Organization - EACHBASE
copywrite 2020 @EACHBASE



The components in this folder are used to generate forms



A. Form Building process 

Components: 
1. formBuilder - containes the state of the form, handles form submission

2. inputBuilder - contains the mapping logic, turning form data elements into Input Fields  

3. inputs (e.g TextField) - contains the JSX for the specific form input - knows how to take the input data and map it to the actual input fields. The styles of the from element can be extended 



Usage:
Import the index.js file of the folder. This component receives the form data, the styles, the endpoint to which the form is submitted to, and the method ('GET', 'POST' etc).
The styles should be the material input styles that are used in the makeStyle function
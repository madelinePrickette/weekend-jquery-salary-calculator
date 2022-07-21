$(onReady);

function onReady() {
    console.log('JQ');
    clickHandler();
}

//✅ 1. click listener for submit button
//✅ 2. that function will capture the input values 
//✅ (CAPTURING WITH .VAL MAKES EVERYTHING A STRING CONVERY SALARY TO NUMBER)
//✅ 3. store those values in new variables
// PAUSE, DO HTML
//✅ 5. create a table
//✅  (a.) table header with a row
//✅  (b.) inside th: first name, last name, id, title, and annual salary and remove.
// 6. create an footer with an h2 of total monthly with a span just for the number.
// 7. give that number an id



function clickHandler() {
    $('#submitButton').on('click', gatherInfo);
}

function gatherInfo() {
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#jobTitleInput').val();
    let annualSalary = Number($('#annualSalaryInput').val());

    console.log(firstName, lastName,idNumber, jobTitle, annualSalary);
}
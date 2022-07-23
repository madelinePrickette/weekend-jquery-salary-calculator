$(onReady);

function onReady() {
    console.log('JQ');
    clickHandler();
}
// JQUERY
//✅ 1. click listener for submit button
//✅ 2. that function will capture the input values 
//✅ (CAPTURING WITH .VAL MAKES EVERYTHING A STRING CONVERY SALARY TO NUMBER)
//✅ 3. store those values in new variables
// PAUSE, DO HTML
//✅ 5. create a table
//✅  (a.) table header with a row
//✅  (b.) inside th: first name, last name, id, title, and annual salary and remove.
//✅ 6. create an footer with an h2 of total monthly with a span just for the number.
//✅ 7. give that number an id
// PAUSE, DO JQUERY
//✅ 8. append the values in the table with td's
//✅ 9. have inputs clear
//✅ 10. append a remove button
//✅ 11. appended remove button works with dynamic listener on container
//✅ 12. use $(this) to pick the right button when clicked to remove
// 13. calculete monthly costs
//✅  (a.) take in value of totalMonthlyNumber into a variable
//✅  (b.) divide annualSalary by 12 then add annualSalary to that variable
//✅  (c.) append to dom




function clickHandler() {
    $('#submitButton').on('click', gatherInfo);
    $('#dataContainer').on('click', '.removeButton', removeEmployee);
}

let totalMonthly = 0;

function gatherInfo() {
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#jobTitleInput').val();
    let annualSalary = Number($('#annualSalaryInput').val());

    console.log(firstName, lastName,idNumber, jobTitle, annualSalary);

    $('#dataContainer').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>$${annualSalary}</td>
            <td><button class="removeButton font">Remove</button></td>
        </tr>
    `)

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

    totalMonthly += (annualSalary/12);
    console.log(totalMonthly);
    $('#totalMonthlyNumber').empty();
    $('#totalMonthlyNumber').append(Math.round(totalMonthly));
    if(totalMonthly > 20000) {
        $('#totalMonthlyBanner').addClass('red-background')
    }
}

function removeEmployee() {
    console.log('employee removed');
    $(this).closest('tr').remove();
}
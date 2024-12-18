const btn = document.getElementById("btn");
const birthDay = document.getElementById("birthDay");
const result = document.getElementById("result");

function calculateAge() {
    const birthDayValue = birthDay.value;
    if (birthDayValue === "") {
        alert("Please enter your birthday date");
    } else {
        const age = getAge(birthDayValue);
        result.textContent = age; // Display the result from `getAge`
    }
}

function getAge(birthDayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthDayValue);

    // Validate the input date
    if (birthdayDate > currentDate) {
        return "Your birthday date is in the future. Please enter a valid date.";
    }

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthdayDate.getMonth();
    const currentDay = currentDate.getDate();
    const birthDay = birthdayDate.getDate();

    // Adjust age if the birthday has not occurred yet in the current year
    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--;
    }

    return `Your age is ${age} years old`;
}

btn.addEventListener("click", function () {
    calculateAge();
});

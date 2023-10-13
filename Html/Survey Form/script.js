document.addEventListener('DOMContentLoaded', function () {
    const surveyForm = document.getElementById('survey-form');
    const submitButton = document.getElementById('submit-button');
    const resetButton = document.getElementById('reset-button');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    // Function to show the popup
    function showPopup() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
        const gender = genderInputs.length > 0 ? genderInputs[0].value : 'Not specified';
        const profession = document.getElementById('profession').value;
        const mobile = document.getElementById('mobile').value;

        document.getElementById('result-first-name').textContent = firstName;
        document.getElementById('result-last-name').textContent = lastName;
        document.getElementById('result-dob').textContent = dob;
        document.getElementById('result-country').textContent = country;
        document.getElementById('result-gender').textContent = gender;
        document.getElementById('result-profession').textContent = profession;
        document.getElementById('result-mobile').textContent = mobile;

        popup.style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = 'none';
    }

    submitButton.addEventListener('click', showPopup);
    closePopupButton.addEventListener('click', closePopup);

    // Reset the form on clicking the reset button
    resetButton.addEventListener('click', function () {
        surveyForm.reset();
    });
});

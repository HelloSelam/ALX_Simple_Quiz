function checkAnswer() {
    const correctAnswer = "4"; // Step 1: Define correct answer

    // Step 2: Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Handle case where no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value; // Step 4: Get user's selected answer

    // Step 5: Compare and display feedback
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // optional: green color
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // optional: red color
    }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
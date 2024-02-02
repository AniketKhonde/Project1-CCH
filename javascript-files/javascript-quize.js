function submitQuiz() {
    var score = 0;
    var answers = ['c', 'a', 'b', 'c', 'b', 'b', 'b', 'b', 'b', 'b']; // Add correct answers for questions 1 to 10

    for (var i = 1; i <= 10; i++) {
        var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            if (selectedOption.value === answers[i - 1]) {
                score++;
            }
        }
    }

    alert('Your score: ' + score + ' out of 10');
}

function gohome() {
    // Define the functionality for the gohome() function if needed
    window.location.href="Quize.html";
}
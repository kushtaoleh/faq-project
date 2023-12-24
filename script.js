document.addEventListener("DOMContentLoaded", function () {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var currentlyVisible = false;

            // Check if the answer for this question is already visible
            var answer = this.nextElementSibling;
            if (answer && answer.style.display === 'block') {
                currentlyVisible = true;
            }

            // Close all answers and reset their corresponding SVGs
            var allAnswers = document.querySelectorAll('.faq-answer');
            allAnswers.forEach(function (ans) {
                ans.style.display = 'none';
                var svgPath = ans.previousElementSibling.querySelector('.plusMinus');
                if (svgPath) {
                    svgPath.setAttribute('d', "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z");
                    svgPath.setAttribute('fill', '#AD28EB');
                }
            });

            // If the clicked question's answer was not already visible, open it and change the SVG
            if (!currentlyVisible && answer && answer.classList.contains('faq-answer')) {
                answer.style.display = 'block';
                var svgPath = this.querySelector('.plusMinus');
                if (svgPath) {
                    svgPath.setAttribute('d', "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z");
                    svgPath.setAttribute('fill', 'black');
                }
            }
        });
    });
});
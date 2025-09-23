let questions = [
    {
        question: "1. Who is the co-founder of 10000 Coders?",
        options: ["A). Anil Kumar", "B). Suman Cheera", "C). Ravi Kumar", "D). Rajesh Reddy"],
        correct_option: "B). Suman Cheera"
    },
    {
        question: "2. Where is 10000 Coders headquartered?",
        options: ["A). Bengaluru", "B). Hyderabad", "C). Pune", "D). Chennai"],
        correct_option: "B). Hyderabad"
    },
    {
        question: "3. What is the primary focus of 10000 Coders?",
        options: ["A). Job-readiness", "B). Academic degrees", "C). Freelancing only", "D). Non-technical courses"],
        correct_option: "A). Job-readiness"
    },
    {
        question: "4. Which platform lists 10000 Coders for fresh graduates?",
        options: ["A). Coursera", "B). Udemy", "C). Internshala", "D). LinkedIn Learning"],
        correct_option: "C). Internshala"
    },
    {
        question: "5. Duration of the immersive training program?",
        options: ["A). 3 months", "B). 6 months", "C). 9 months", "D). 12 months"],
        correct_option: "B). 6 months"
    },
    {
        question: "6. Which technologies are taught at 10000 Coders?",
        options: ["A). AI/ML, Java, Python, MERN stack", "B). Graphic Design, Animation", "C). Digital Marketing, SEO", "D). Hardware Engineering"],
        correct_option: "A). AI/ML, Java, Python, MERN stack"
    },
    {
        question: "7. Who is the target audience of 10000 Coders?",
        options: ["A). Experienced software developers", "B). Fresh graduates", "C). High school students", "D). Professionals seeking career change"],
        correct_option: "B). Fresh graduates"
    },
    {
        question: "8. What is emphasized in the training at 10000 Coders?",
        options: ["A). Hands-on projects", "B). Only theory", "C). Memorization", "D). Passive videos"],
        correct_option: "A). Hands-on projects"
    },
    {
        question: "9. What kind of courses does 10000 Coders offer?",
        options: ["A). Short-term coding bootcamps", "B). 4-year university degrees", "C). Hobby classes", "D). Freelance-only courses"],
        correct_option: "A). Short-term coding bootcamps"
    },
    {
        question: "10. Which skill areas are a key focus at 10000 Coders?",
        options: ["A). Communication and technical skills", "B). Painting and music", "C). Cooking and baking", "D). Yoga and meditation"],
        correct_option: "A). Communication and technical skills"
    },
    {
        question: "11. Who leads the placement guidance at 10000 Coders?",
        options: ["A). CEO", "B). Co-founder & Placement Head", "C). Senior students", "D). External consultants"],
        correct_option: "B). Co-founder & Placement Head"
    },
    {
        question: "12. Which is a unique feature of 10000 Coders training?",
        options: ["A). Only theory lectures", "B). Hands-on projects with real-world applications", "C). Self-study without mentorship", "D). Hobby classes"],
        correct_option: "B). Hands-on projects with real-world applications"
    },
    {
        question: "13. Which programming languages are commonly taught at 10000 Coders?",
        options: ["A). Python, Java", "B). C++, PHP", "C). Ruby, Perl", "D). Swift, Kotlin"],
        correct_option: "A). Python, Java"
    },
    {
        question: "14. Which framework is included in 10000 Coders' curriculum?",
        options: ["A). MERN stack", "B). Laravel", "C). Django only", "D). Spring Boot only"],
        correct_option: "A). MERN stack"
    },
    {
        question: "15. What is the main goal for students at 10000 Coders?",
        options: ["A). Get hobby skills", "B). Become job-ready software engineers", "C). Learn only theory", "D). Start own business"],
        correct_option: "B). Become job-ready software engineers"
    },
    {
        question: "16. Which type of learners is 10000 Coders best suited for?",
        options: ["A). High school students", "B). Fresh graduates", "C). Experienced developers only", "D). Hobbyists"],
        correct_option: "B). Fresh graduates"
    },
    {
        question: "17. Which skill besides technical skills is emphasized at 10000 Coders?",
        options: ["A). Cooking", "B). Communication", "C). Music", "D). Painting"],
        correct_option: "B). Communication"
    },
    {
        question: "18. Which delivery mode is used by 10000 Coders for training?",
        options: ["A). Online live sessions", "B). Pre-recorded only", "C). Textbooks only", "D). Workshops only"],
        correct_option: "A). Online live sessions"
    },
    {
        question: "19. Which career outcome is expected after completing 10000 Coders program?",
        options: ["A). Freelance only", "B). High-paying software job readiness", "C). Only internships", "D). Non-technical jobs"],
        correct_option: "B). High-paying software job readiness"
    },
    {
        question: "20. What is emphasized in 10000 Coders projects?",
        options: ["A). Real-world application", "B). Memorization exercises", "C). Only quizzes", "D). Hobby projects"],
        correct_option: "A). Real-world application"
    }

];

// ---------------------------------------------------------------------------------

let main = document.getElementById("main")
let count = 0;
let startBtn = document.getElementById("startBtn");
let instructionContainer = document.getElementById("instruction-container");
let questionContainer = document.getElementById("question-container");
let resultContainer = document.getElementById("result-container");
let question = document.getElementById("question");
let options = document.getElementsByClassName("option");
let result = document.getElementById("result");
let d_timer = document.getElementById("d_timer");

let marks = 0;

// ---------------------------------------------------------------------------------
let min = 10;
let sec = 0;
let clock = 0;
flag=true;
let timerId;


function timer_fun() {
    if (clock == 1) {
        if (min == 0 && sec == 0) {
            clearInterval(timerId);
                d_timer.textContent = "00:00";
            showresult();
            return;
        }

        if (sec == 0) {
            min -= 1;
            sec = 59;
        } else {
            sec -= 1;
        }

        let minutes;
        let seconds;
        if (min < 10) {
            minutes = "0" + min
        }
        else {
            minutes = min
        }
        if (sec < 10) {
            seconds = "0" + sec
        }
        else {
            seconds = sec
        }
        d_timer.textContent = minutes + ":" + seconds;
    }
}

// ---------------------------------------------------------------------------------

questionContainer.style.display = "none";
resultContainer.style.display = "none";
d_timer.style.display = "none";

startBtn.onclick = function () {
    if (startBtn.textContent == "Restart") {
        clearInterval(timerId);
        min = 10;
        sec = 0;
        clock = 0;
        marks = 0;
        count = 0;
        d_timer.textContent = "10:00";
        d_timer.style.display = "none";

        questionContainer.style.display = "none";
        resultContainer.style.display = "none";
        instructionContainer.style.display = "block";
        main.style.backgroundColor = "white"
        startBtn.textContent = "Start";
        return;
    }

    if (flag) {
        timerId = setInterval(timer_fun, 1000);
        flag=false
        clock = 1;
    }

// ---------------------------------------------------------------------------------

    if (count == questions.length) {
        questionContainer.style.display = "none";
        instructionContainer.style.display = "none";
        resultContainer.style.display = "block";
        d_timer.style.display = "none";
        startBtn.textContent = "Restart";
        result.textContent = "Total Marks: " + marks + "/40";
        if (marks >= 16) {
            main.style.backgroundColor = "greenyellow"
        }
        else {
            main.style.backgroundColor = "red"
        }
        count = 0;
        marks = 0;
        clearInterval(timerId);
        return;
    }

// ---------------------------------------------------------------------------------

    d_timer.style.display = "block";
    questionContainer.style.display = "block";
    instructionContainer.style.display = "none";
    resultContainer.style.display = "none";
    startBtn.textContent = "Next";

    question.textContent = questions[count].question;
    for (let i = 0; i < 4; i++) {
        options[i].textContent = questions[count].options[i];
        options[i].style.backgroundColor = "white";
        options[i].disabled = false;
    }
    count++;
};

// ---------------------------------------------------------------------------------

for (let option of options) {
    option.onclick = function () {
        if (option.textContent == questions[count - 1].correct_option) {
            option.style.backgroundColor = "green";
            marks += 2;
        } else {
            option.style.backgroundColor = "red";
            for (let i of options) {
                if (i.textContent == questions[count - 1].correct_option) {
                    i.style.backgroundColor = "green";
                }
            }
            marks--;
        }
        for (let i of options) {
            i.disabled = true;
        }
    };
}

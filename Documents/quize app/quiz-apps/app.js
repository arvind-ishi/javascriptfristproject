let ques = [
    {
        'que': " which of the following markup language ",
        'a': "php",
        'b': "HTML",
        'c': "python",
        'd': "javascript",
        'Correct': "b"
    },

    {
        'que': "Identify the markup language commonly used for structuring content on the World Wide Web:",
        'a': "CSS",
        'b': "XML",
        'c': "Java",
        'd': "Ruby",
        'Correct': "b"

    },
    {
        'que': "Which of the following is a scripting  language commonly used for enhancing web pages interactivity and dynamic behavior?",

        'a': "CSS",
        'b': "HTML",
        'c': "Python",
        'd': "JavaScript",
        'Correct': "d"
    },
];

let index = 0;
let total = ques.length;
let right = 0;
let wrong = 0;

let queNew = document.getElementById('queNew')
const quesinput = document.querySelectorAll('.options')
const loadqution = () => {

    if(index ==total){
        return endQuiz();
    }
    reset()
    const data = ques[index];
    console.log(data);
    queNew.innerText = `${index + 1})${data.que}`;
    quesinput[0].nextElementSibling.innerText = data.a;
    quesinput[1].nextElementSibling.innerText = data.b;
    quesinput[2].nextElementSibling.innerText = data.c;
    quesinput[3].nextElementSibling.innerText = data.d;


}


const quizsubmit = () => {
    const data = ques[index];
    const ans = getAns();
    console.log(ans, data.Correct)
    if (ans == data.Correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadqution();

    return;
}


const getAns = () => {
    let answer;
    quesinput.forEach(
        (input) => {
            if ( input.checked) {
                answer =input.value;
            }
        }
    )
    return answer
}


const reset = () => {
    quesinput.forEach(
        (input) => {
            if (input) {
                input.checked= false;
            }
        }
    )

}

const endQuiz = () =>{
    document.querySelector(".container").innerHTML = `
      <H3> thank you for playing the quiz </H3>
      <H2> ${right}/${total} are correct </H2>
    `
}

loadqution();

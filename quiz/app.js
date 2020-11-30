const correctAnswer = ["B", "B" , "B" , "B"];
const form = documet.querySelector(".quiz-form");
form.addEventListener("Submit" , e => {
    e.preventdefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value,form.q3.value,form.q4.value ]

});

//form.addEventListener("Submit" ,submitHandler(e));
function submitHandler(event) {
    e.preventdefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value,form.q3.value,form.q4.value ]

}

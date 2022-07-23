// let soru = {
//     soruMetni: "Hangisi JS paket yonetim ugulamasidir?",
//     cevablar: {
//         a: "node.js",
//         b: "Typescript",
//         c: "Npm",
//     },
//     dogruCevab: "c",
//     cevabkontrolet: function(cevab) {
//         return cevab === this.dogruCevab;
//     }
// };



// let soru2 = {
//     soruMetni: "Hangisi .net paket yonetim ugulamasidir?",
//     cevablar: {
//         a: "node.js",
//         b: "nuget",
//         c: "Npm",
//     },
//     dogruCevab: "b",
//     cevabkontrolet: function(cevab) {
//         return cevab === this.dogruCevab;
//     }
// };

// console.log(soru.soruMetni);
// console.log(soru.cevabkontrolet("c"));
// console.log(soru2.cevabkontrolet("b"));
// OOP: Nesne Tabanlı Programlama


const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSaysiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
})
ui.btn_next.addEventListener("click", () => {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSaysiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        console.log("quiz bitti");
        ui.btn_start.classList.add("inactive");
        ui.quiz_box.classList.remove("active");
        ui.scor_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevabSaysisi)
    }
});

ui.btn_quit.addEventListener("click", () => {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", () => {
    quiz.soruIndex = 0;
    quiz.dogruCevabSaysisi = 0;
    ui.btn_start.click();
    ui.scor_box.classList.remove("active")
});

function optionSelected(option) {
    let cevab = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevab)) {
        quiz.dogruCevabSaysisi += 1;
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}
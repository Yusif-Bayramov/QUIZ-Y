function UI() {
    this.btn_start = document.querySelector(".btn_start"),
        this.btn_next = document.querySelector(".btn_next"),
        this.btn_replay = document.querySelector(".btn_replay"),
        this.btn_quit = document.querySelector(".btn_quit"),
        this.quiz_box = document.querySelector(".quiz_box"),
        this.scor_box = document.querySelector(".scor_box"),
        this.option_list = document.querySelector(".option_list"),
        this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
        this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;
    for (let cevab in soru.cevapSecenekleri) {
        options += `
        <div class="option">
        <span><b>${cevab}</b>: ${soru.cevapSecenekleri[cevab]}</span>
        </div>
        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)");

    }
}
UI.prototype.soruSaysiniGoster = function(soruSrasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSrasi}/${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.skoruGoster = function(toplamSoru, dogruCevab) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevab} dogru cevab verdiniz.`;
    document.querySelector(".scor_box .scor_text").innerHTML = tag;
}
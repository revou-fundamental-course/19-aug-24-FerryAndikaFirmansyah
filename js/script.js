//Slideshow===============
let slideIndex = 0;
    const slides = document.getElementsByClassName("img-slideshow");

    function showDivs(n) {
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active-slide");
        }
        slides[slideIndex].classList.add("active-slide");
    }

    function plusDivs(n) {
        slideIndex += n;
        showDivs(slideIndex);
    }
    showDivs(slideIndex);

//Form====================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('personalDataForm');
    const formResults = document.getElementById('formResults');
    const resultName = document.getElementById('resultName');
    const resultEmail = document.getElementById('resultEmail');
    const resultDob = document.getElementById('resultDob');
    const resultGender = document.getElementById('resultGender');
    const resultMessages = document.getElementById('resultMessages');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = form.fullName.value.trim();
        const email = form.email.value.trim();
        const dob = form.dob.value;
        const gender = form.gender.value;
        const messages = form.messages.value.trim();

        if (fullName === '' || email === '' || dob === '' || gender === '' || messages === '') {
            alert('Semua kolom harus diisi!');
            return;
        }

        resultName.textContent = fullName;
        resultEmail.textContent = email;
        resultDob.textContent = dob;
        resultGender.textContent = gender === 'male' ? 'Pria' : gender === 'female' ? 'Wanita' : 'Lainnya';
        resultMessages.textContent = messages;

        formResults.style.display = 'block';
    });
});

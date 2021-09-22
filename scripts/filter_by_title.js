const inputFilter = document.querySelector('#input_filter');

inputFilter.addEventListener('input', function() {
    const cards = document.querySelectorAll('.media_card');

    if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let listItem = cards[i];
            // Filtragem por caractere:
            let h1Title = listItem.querySelector('h2');
            let titleString = h1Title.textContent;
            // Expressão regular
            let redExp = new RegExp(this.value, 'i');
            if (redExp.test(titleString)) {
                listItem.classList.remove('invisible');
            } else {
                listItem.classList.add('invisible');
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let listItem = cards[i];
            listItem.classList.remove('invisible');
        }
    }
});
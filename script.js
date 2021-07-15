// @author "Marcelo Silveira Hayden"
document.querySelector('#add_btn').addEventListener('click', function(event) {
    event.preventDefault(); // TEMPORÁRIO
    const form = document.getElementById('add_media_form');

    if (validateFormValues(form) == true) {
        createListItem(createMediaObj(form));
    }
})

function validateFormValues(form) {
    const warnings = document.getElementById('warnings');

    if (form.title.value.length !== 0) {
        warnings.textContent = '';
        console.log('The form is valid!');
        return true;
    } else {
        warnings.textContent = 'You need to insert a title to proceed.';
        console.log('The form is NOT valid!');
        return false;
    }
};

function createMediaObj(validForm) {
    mediaObj = {
        title: validForm.title.value,
        link: insertLinkString(),
        tags: validForm.tags.value,
        note: validForm.note.value
    }

    return mediaObj;

    function insertLinkString() {
        if (validForm.link.value !== 0) {
            return validForm.link.value;
        } else {
            return 'There is no link yet.';
        }
    };
};

function createListItem(mediaObj) {
    const newLi = document.createElement('li');
    newLi.classList.add('media_card');

    const newH2 = document.createElement('h2');
    newH2.textContent = mediaObj.title;
    newLi.insertAdjacentElement('afterbegin', newH2);

    const divClassesList = ['links', 'tags', 'note', 'buttons'];

    for (let i = 0; i < divClassesList.length; i++) {
        const classValue = divClassesList[i];
        const newDiv = document.createElement('div');
        newDiv.classList.add(classValue);
        newLi.insertAdjacentElement('beforeend', newDiv);
    }
    document.getElementById('usr_list').insertAdjacentElement('beforeend', newLi);
}
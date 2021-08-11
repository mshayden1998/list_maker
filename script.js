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
        return true;
    } else {
        warnings.textContent = 'You need to insert a title to proceed.\n';
        return false;
    }
};

function createMediaObj(validForm) {
    mediaObj = {
        title: validForm.title.value,
        link: validForm.link.value,
        tags: validForm.tags.value,
        note: validForm.note.value
    }

    return mediaObj;
};

function createListItem(mediaObj) {
    const newLi = document.createElement('li');
    newLi.classList.add('media_card');
    newLi.id = 'recentlyAdded';

    const newH2 = document.createElement('h2');
    newH2.textContent = mediaObj.title;
    newLi.insertAdjacentElement('afterbegin', newH2);

    const divClassesList = ['links', 'tags', 'note', 'buttons'];
    const elementForDivList  = ['a', 'span', 'p', 'input'];
    const btnNameList = ['Exclude', 'Edit'];

    // Adds basic DIV elements to the new LI element
    for (let i = 0; i < divClassesList.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(divClassesList[i]);
        newLi.insertAdjacentElement('beforeend', newDiv);
    }

    const newA = document.createElement('a');
    newA.setAttribute('href', mediaObj.link);
    newA.textContent = 'Assistir em ' + mediaObj.link;
    newLi.children[1].insertAdjacentElement('beforeend', newA);

    const newSpan = document.createElement('span');
    newSpan.textContent = mediaObj.tags;
    newLi.children[2].insertAdjacentElement('beforeend', newSpan);

    const newP = document.createElement('p');
    newP.textContent = mediaObj.note;
    newLi.children[3].insertAdjacentElement('beforeend', newP);

    // Adds BUTTON elements to  element
    for (let i = 0; i < btnNameList.length; i++) {
        const newBtn = document.createElement('button');
        newBtn.textContent = btnNameList[i];
        newLi.children[4].insertAdjacentElement('afterbegin', newBtn);
    }

    document.getElementById('usr_list').insertAdjacentElement('beforeend', newLi);
};
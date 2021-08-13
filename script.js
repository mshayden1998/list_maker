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
}

function createMediaObj(validForm) {
    mediaObj = {
        title: validForm.title.value,
        link: getALinkOrNot(),
        tags: validForm.tags.value,
        note: validForm.note.value
    }

    return mediaObj;

    function getALinkOrNot() {
        if (validForm.link.value.length !== 0) {
            return new URL(validForm.link.value);
        } else {
            return false;
        }
    }
}

function createListItem(mediaObj) {
    function addElementInsideNewLi(childrenNumb, elementName) {
        newLi.children[childrenNumb].insertAdjacentElement('beforeend', elementName);
    }

    const newLi = document.createElement('li');
    newLi.classList.add('media_card');
    newLi.id = 'card' + (document.querySelectorAll('.media_card').length + 1);

    const newH2 = document.createElement('h2');
    newH2.textContent = mediaObj.title;
    newLi.insertAdjacentElement('afterbegin', newH2);

    const divClassesList = ['links_ctr', 'tags_ctr', 'note_ctr', 'buttons_ctr'];
    const btnNameList = ['Edit', 'Delete'];

    // Adds basic DIV elements to the new LI element
    for (let i = 0; i < divClassesList.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(divClassesList[i]);
        newLi.insertAdjacentElement('beforeend', newDiv);
    }

    if (mediaObj.link == false) {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'There is no link yet';
        addElementInsideNewLi(1, newSpan)
        //newLi.children[1].insertAdjacentElement('beforeend', newSpan);
    } else {
        const newA = document.createElement('a');
        newA.setAttribute('href', mediaObj.link);
        newA.textContent = 'Assistir em ' + mediaObj.link.hostname;
        addElementInsideNewLi(1, newA);
        //newLi.children[1].insertAdjacentElement('beforeend', newA);
    }

    const newSpan = document.createElement('span');
    newSpan.textContent = mediaObj.tags;
    addElementInsideNewLi(2, newSpan);
    //newLi.children[2].insertAdjacentElement('beforeend', newSpan);

    const newP = document.createElement('p');
    newP.textContent = mediaObj.note;
    addElementInsideNewLi(3, newP);
    //newLi.children[3].insertAdjacentElement('beforeend', newP);

    // Adds BUTTON elements to the current LI element
    for (let i = 0; i < btnNameList.length; i++) {
        const newBtn = document.createElement('button');
        newBtn.textContent = btnNameList[i];
        addElementInsideNewLi(4, newBtn);
        //newLi.children[4].insertAdjacentElement('afterbegin', newBtn);
    }

    document.getElementById('usr_list').insertAdjacentElement('beforeend', newLi);
}
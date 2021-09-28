import { Media } from './Media.js';

const form = document.forms.add_media_form;

document.querySelector('#add_btn').addEventListener('click', (event) => {
    event.preventDefault(); // TEMPORARY line for development purposes

    if (validateTitle()) {
        const newItem = new Media;
        newItem.title = form.title.value;
        newItem.link = createLinkOrNoLinkMessage(form.link.value);
        newItem.tags = createTags(form.tags.value);
        newItem.mainTag = newItem.tags[0];
        newItem.note = form.note.value;

        console.log(newItem);
    } else {
        form.title.style.borderColor = 'red';
    }
})

function validateTitle() {
    /*
    This simple function will return true if there is a value to be keeped
    */
    if (form.title.value.length > 0) {
        return true;
    }
}

function createTags(input_value) {
    // It needs to be updated
    let inputText = input_value;
    const tagsArray = inputText.split(',');
    return tagsArray;
}

function createLinkOrNoLinkMessage(input_value) {
    /*
    This function will verify if the input value is actually a link so it will be keeped or will return null. It needs to be updated.
    */
    if (input_value.length > 0) {
        return input_value;
    } else {
        return null;
    }
}
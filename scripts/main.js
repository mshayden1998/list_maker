import { Media } from './Media.js';

const form = document.forms.add_media_form;

document.querySelector('#add_btn').addEventListener('click', (event) => {
    event.preventDefault(); // TEMPORARY line for development purposes

    if (validateTitle()) {
        const newItem = new Media;
        newItem.title = form.title.value;
        newItem.link = createLinkOrNoLinkMessage(form.link.value);
        newItem.tags = createTags(form.tags.value);
        newItem.note = form.note.value;

        console.log(newItem);
    } else {
        form.title.style.borderColor = 'red';
    }
})

function validateTitle() {
    if (form.title.value.length > 0) {
        return true;
    }
}

function createTags(input_value) {
    /*
    This function will get all the ',' from the input value so it will create an array of tags
    */
}

function createLinkOrNoLinkMessage(input_value) {
    /*
    This function will create a link and not just consider the link length. It will be updated.
    */
    if (input_value.length > 0) {
        return input_value;
    } else {
        return 'There is no link yet';
    }
}
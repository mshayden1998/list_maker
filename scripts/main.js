import { Media } from './Media.js';

const form = document.forms.add_media_form;

document.querySelector('#add_btn').addEventListener('click', (event) => {
    event.preventDefault();

    if (validateForm()) {
        const newItem = new Media;
        newItem.title = form.title.value;
        newItem.link = createLinkOrNoLinkMessage();
        newItem.tags = createTags(form.tags.value);
        newItem.note = form.note.value;

        console.log(newItem);
    } else {
        form.title.style.borderColor = 'red';
    }
})

function validateForm() {
    if (form.title.value.length > 0) {
        return true;
    }
}

function createTags(input_value) {
    /*
    This function will get all the ',' from the input value so it will create an array of tags
    */
}

function createLinkOrNoLinkMessage() {
    if (form.link.value.length > 0) {
        return form.link.value;
    } else {
        return 'There is no link yet';
    }
}
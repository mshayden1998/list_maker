class Media {
    constructor(title, link, tags, mainTag, note) {
        this.title = title;
        this.link = link;
        this.tags = tags;
        this.mainTag = mainTag;
        this.note = note;
    }
}

const form = document.forms.add_media_form;

document.querySelector('#add_btn').addEventListener('click', (event) => {
    event.preventDefault(); // TEMPORARY line for development purposes

    if (validateTitle()) {
        const newMedia = new Media;
        newMedia.title = form.title.value;
        newMedia.link = createLinkOrNoLinkMessage(form.link.value);
        newMedia.tags = createTags(form.tags.value);
        newMedia.mainTag = newMedia.tags[0];
        newMedia.note = form.note.value;

        console.log(newMedia);
    } else {
        form.title.style.borderColor = 'red';
    }
})

function validateTitle() {
    // Verifies if there is something typed on the required input.
    if (form.title.value.length > 0) {
        return true;
    }
}

function createTags(input_value) {
    // Return a list of words to use as tags.
    const toList = input_value.split(',');
    for (let i in toList) {
        toList[i] = toList[i].trimStart(); // Remove all white spaces before every word.
    }
    console.log("Versão lista final: ", toList);
    
    return toList;
}

function createLinkOrNoLinkMessage(input_value) {
    // Will verify if the input value is actually a link so it will be keeped or will return null.
    if (input_value.length > 0 && input_value.includes('https://')) {
        return input_value;
    } else {
        console.log('Link vazio ou não contém segurança "https".');
        
        return null;
    }
}
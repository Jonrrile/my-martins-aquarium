/*
    This function will convert a single quote object to an
    HTML representation and return it
*/
const quoteConverter = (quoteObject) => {

    const fishHTMLRepresentation = `<section class="quote">${quoteObject.details}</section>`

    return fishHTMLRepresentation

}
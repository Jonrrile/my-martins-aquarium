/*
    This function will convert a single tip object to an
    HTML representation and return it
*/
const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = `<section class="tips">
    <ol>
    <li class="tip">${tipObject.details}</li>
    </ol>
    </section>`

    return tipHTMLRepresentation

}
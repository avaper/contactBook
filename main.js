const name = document.querySelector('.name')
const number = document.querySelector('.number')
const address = document.querySelector('.address')
const btnAddContact = document.querySelector('.btn-add-contact')


const contactList = document.querySelector('.contact-list')

const database = window.localStorage


btnAddContact.onclick = () =>
{
    let contact = 
    {
        id: Math.random(1, 100),
        name: name.value,
        number: number.value,
        address: address.value,
    }
    console.log(contact)

    saveContact(database, contact)
}

loadContacts(database, contactList)
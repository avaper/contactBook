const saveContact = (database, contact) => 
{
    // database.setItem(contact.id, contact)
    database.setItem(contact.id, JSON.stringify(contact))
    window.location.href = '/'
}

const loadContacts = (database, parentNode) => 
{
    let keys = Object.keys(database)
    // console.log(keys)

    for(key of keys)
    {
        let contact = JSON.parse(database.getItem(key))

        createContact(parentNode, contact, database)

        // console.log(contact)
    }
}

const createContact = (parentNode, contact, database) =>
{
    let divContact = document.createElement('div')
    let contactName = document.createElement('h3')
    let contactNumber = document.createElement('p')
    let contactAddress = document.createElement('p')
    let deleteIcon = document.createElement('span')

    contactName.innerHTML = contact.name
    contactNumber.innerHTML = contact.number
    contactAddress.innerHTML = contact.address
    deleteIcon.innerHTML = 'delete_forever'

    divContact.classList.add('contact')
    deleteIcon.classList.add('material-icons', 'icon')


    deleteIcon.onclick = () => 
    {
        database.removeItem(contact.id)
        window.location.href = '/'
    }

    divContact.appendChild(contactName)
    divContact.appendChild(contactNumber)
    divContact.appendChild(contactAddress)
    divContact.appendChild(deleteIcon)

    parentNode.appendChild(divContact)
}

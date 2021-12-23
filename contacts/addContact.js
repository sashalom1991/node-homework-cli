const {nanoid} = require("nanoid");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function addContact({name, email, phone}) {
    const contacts = await listContacts();
    const newContact ={
        id: nanoid(),
        name,
        email,
        phone,
    }
    contacts.push(newContact);
    await updateContacts(contacts);
    return contacts;
  }

module.exports = addContact;
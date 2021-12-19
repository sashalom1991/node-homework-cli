const listContacts = require("./listContacts");
const updateProducts = require("./updateContacts");

const removeContact = async(id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const removeContact = contacts.splice(idx, 1);
    await updateProducts(contacts);
    return removeContact;
}

module.exports = removeContact;
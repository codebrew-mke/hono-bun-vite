import { Contact, ContactCreate } from "@/contact/model";

export let contacts: Contact[] = [
  { id: 1, firstName: "Joe", lastName: "Blow", email: "joe@blow.com" },
  { id: 2, firstName: "Jane", lastName: "Doe", email: "jane@doe.com" },
];

export async function findAll(): Promise<Contact[]> {
  return contacts;
}

export async function findById(id: number): Promise<Contact> {
  const index = contacts.findIndex((c) => c.id === id);
  if (index === -1) {
    return Promise.reject("could not find contact");
  }
  return contacts[index];
}

export async function update(
  id: number,
  contactCreate: ContactCreate
): Promise<Contact> {
  const index = contacts.findIndex((c) => c.id === id);
  if (index === -1) {
    return Promise.reject("could not find contact");
  }
  const existingContact = contacts[index];
  const updatedContact = {
    ...existingContact,
    ...contactCreate,
  };

  contacts[index] = updatedContact;
  return updatedContact;
}

export async function create(contactCreate: ContactCreate): Promise<Contact> {
  let lastId = 1;
  if (contacts.length > 0) {
    lastId = contacts.length + 1;
  }
  const newContact: Contact = {
    ...contactCreate,
    id: lastId,
  };
  contacts = [...contacts, newContact];
  return newContact;
}

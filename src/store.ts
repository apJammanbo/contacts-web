import { atom } from 'recoil';
import { getAll } from './apis';
import { Contact, EditContact } from './types';

const getAllContact = async (): Promise<Contact[]> => {
  const response = await getAll();
  const contacts: Contact[] = await response.json();
  return contacts;
};

export const selectedContactState = atom<Contact | null>({
  key: 'selectedContact',
  default: null,
});

export const keyWordState = atom<string>({
  key: 'keywordState',
  default: '',
});

export const contactsState = atom<Contact[]>({
  key: 'contactsState',
  default: getAllContact(),
});

export const editedContactState = atom<EditContact>({
  key: 'editContactsState',
  default: {},
});

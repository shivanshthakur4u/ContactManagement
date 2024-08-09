import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ContactCard from "./ContactCard";
import { Contact } from "../Types/types";


interface ContactListProps {
  setEditingContact: React.Dispatch<React.SetStateAction<Contact | null>>;
}

const ContactList: React.FC<ContactListProps> = ({setEditingContact}) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {contacts.map((contact) => (
        <ContactCard contact={contact} setEditingContact={setEditingContact} type="normal"/>
      ))}
    </div>
  );
};

export default ContactList;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addContact, updateContact } from "../redux/contactsSlice";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import CommonButton from "../components/CommonButton";
import { ImCross } from "react-icons/im";
import { Contact } from "../Types/types";

const Contacts: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleCreate = (contact: Contact) => {
    dispatch(addContact(contact));
    setIsCreating(false);
  };

  const handleUpdate = (contact: Contact) => {
    dispatch(updateContact(contact));
    setEditingContact(null);
  };

  if (isCreating || editingContact) {
    return (
      <ContactForm
        onSave={isCreating ? handleCreate : handleUpdate}
        onCancel={() => {
          setIsCreating(false);
          setEditingContact(null);
        }}
        initialData={editingContact || undefined}
      />
    );
  }

  return (
    <div className="p-4 ">
      <div className="flex items-center justify-center mt-10">
      <CommonButton
        onPress={() => setIsCreating(true)}
        title="Create Contact"
        type="primary"
      />
      </div>
      {contacts.length === 0 ? (
        <div className="flex items-center justify-center">
          <div className="py-8 border lg:w-[45%] w-[95%] px-5 mt-5 rounded-md flex gap-5 items-start">
          <div className="rounded-full lg:h-16 lg:w-16 min-w-10 min-h-10  bg-red-100 items-center justify-center flex ">
          <ImCross color="#FF0000" className="lg:w-6 lg:h-6 w-4 h-4 "/>
          </div>
          <div className="sm:text-4xl text-xl font-semibold">
            <p className="text-blue-700">No Contact Found</p>
            <p className="text-gray-500 sm:text-xl text-base">Please add contact from Create Contact Button</p>
          </div>
        </div>
        </div>
      ) : (
       <div className="mt-8">
         <ContactList setEditingContact={setEditingContact} />
       </div>
      )}
    </div>
  );
};

export default Contacts;

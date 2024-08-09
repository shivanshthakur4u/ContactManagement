import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { updateContact } from "../redux/contactsSlice";
import ContactForm from "../components/ContactForm";
import { Contact } from "../Types/types";
import ContactCard from "./ContactCard";
import { MdArrowBack } from "react-icons/md";

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === id)
  );

  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false);
  
  if (!contact) {
    return <div>Contact not found</div>;
  }

  const handleUpdate = (updatedContact: Contact) => {
    dispatch(updateContact(updatedContact));
    setIsEditing(false);
  };

  return (
    <div className="p-4">
      {isEditing ? (
        <ContactForm
          onSave={handleUpdate}
          onCancel={() => setIsEditing(false)}
          initialData={contact}
        />
      ) : (
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-0.5 cursor-pointer" onClick={() => navigate(-1)}>
          <MdArrowBack size={22} /> Back
          </span>

          <ContactCard
            contact={contact}
            setEditingContact={() => setIsEditing(true)}
            type="details"
          />
        </div>
      )}
    </div>
  );
};

export default ContactDetails;

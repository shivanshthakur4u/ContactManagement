import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import { Link } from "react-router-dom";
import { Contact } from "../Types/types";
import CommonButton from "./CommonButton";

interface ContactCardProps {
  contact: Contact;
  setEditingContact: React.Dispatch<React.SetStateAction<Contact | null>>;
  type: "details" | "normal";
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  setEditingContact,
  type,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    // Confirm deletion
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div
      key={contact.id}
      className="border p-4 rounded w-full bg-white shadow-md"
    >
      <h3 className="font-bold text-xl">{`${contact.firstName} ${contact.lastName}`}</h3>
      <p className="text-gray-700">Status: {contact.status}</p>
      {type === "details" && (
        <>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Status: {contact.status}</p>
        </>
      )}
      {type !== "details" && (
        <Link
          to={`/contacts/${contact.id}`}
          className="text-blue-500  mt-2 block"
          aria-label={`View details for ${contact.firstName} ${contact.lastName}`}
        >
          View Details
        </Link>
      )}
      {type !== "details" && (
        <div className="mt-4 w-full flex justify-end gap-2">
          <CommonButton
            type="edit"
            onPress={() => setEditingContact(contact)}
            title="Edit"
          />

          <CommonButton
            type="delete"
            title="Delete"
            onPress={() => handleDelete(contact.id)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactCard;

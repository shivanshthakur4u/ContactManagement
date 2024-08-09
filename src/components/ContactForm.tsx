import React, { useState } from "react";
import InputField from "./InputField";
import { RiUser3Fill } from "react-icons/ri";
import { MdEmail, MdPhone } from "react-icons/md";
import CommonButton from "./CommonButton";
import { Contact } from "../Types/types";
interface ContactFormProps {
  onSave: (contact: Contact) => void;
  onCancel: () => void;
  initialData?: Contact;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSave,
  onCancel,
  initialData,
}) => {
  const [firstName, setFirstName] = useState(initialData?.firstName || "");
  const [lastName, setLastName] = useState(initialData?.lastName || "");
  const [status, setStatus] = useState(initialData?.status || "active");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact: Contact = {
      id: initialData?.id || Date.now().toString(),
      firstName,
      lastName,
      status,
      email,
      phone,
    };
    onSave(contact);
  };

  return (
    <div className="p-5">
      <h3 className="text-center text-2xl font-bold mb-4">
        {initialData ? "Edit Contact" : "Add New Contact"}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 border rounded p-6 mx-auto max-w-2xl"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <InputField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            type="text"
            placeholder="First Name"
            icon={<RiUser3Fill />}
          />
          <InputField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            type="text"
            placeholder="Last Name"
            icon={<RiUser3Fill />}
          />
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="user@gmail.com"
            icon={<MdEmail />}
          />
          <InputField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="tel"
            placeholder="1234567890"
            icon={<MdPhone />}
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 font-semibold">Status:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
              />
              Active
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
              />
              Inactive
            </label>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <CommonButton type="cancel" onPress={onCancel} title="Cancel" />

          <CommonButton
            title={initialData ? "Save" : "Add"}
            type="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import type { FC } from "hono/jsx";
import type { Contact, ContactCreateErrors } from "../model";

export const Contacts: FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <div>
      <h1>Contacts</h1>
      {contacts.map((c) => (
        <ContactDetail contact={c} />
      ))}
    </div>
  );
};

export const ContactDetail: FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <div hx-target="this" hx-swap="outerHTML">
      <div>
        <label>First Name</label>: {contact.firstName}
      </div>
      <div>
        <label>Last Name</label>: {contact.lastName}
      </div>
      <div>
        <label>Email</label>: {contact.email}
      </div>
      <button hx-get={`/contact/${contact.id}/edit`} class="btn primary">
        Click To Edit
      </button>
    </div>
  );
};

export const ContactDetailEdit: FC<{
  contact: Contact;
  errors?: ContactCreateErrors;
}> = ({ contact, errors }) => {
  return (
    <form
      hx-put={`/contact/${contact.id}`}
      hx-target="this"
      hx-swap="outerHTML"
    >
      <label className="floating-label">
        <span>First Name</span>
        <input
          type="text"
          name="firstName"
          className={`input input-md ${errors?.fieldErrors.firstName ?? "validator"}`}
          placeholder="First name"
          value={contact.firstName}
        />
        <div className="validator-hint">{errors?.fieldErrors.firstName}</div>
      </label>
      <label className="floating-label">
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          className={`input input-md ${errors?.fieldErrors.lastName ?? "validator"}`}
          placeholder="Last name"
          value={contact.lastName}
        />
        <div className="validator-hint">{errors?.fieldErrors.lastName}</div>
      </label>
      <label className="floating-label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          className={`input input-md ${errors?.fieldErrors.email ?? "validator"}`}
          placeholder="Email"
          value={contact.email}
        />
        <div className="validator-hint">{errors?.fieldErrors.email}</div>
        <button class="btn">Submit</button>
        <button class="btn" hx-get={`/contact/${contact.id}`}>
          Cancel
        </button>
      </label>
    </form>
  );
};

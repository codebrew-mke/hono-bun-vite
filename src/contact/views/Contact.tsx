import type { Contact } from "../model";

export function Contacts({ contacts }: { contacts: Contact[] }) {
  return (
    <div>
      <h1>Contacts</h1>
      {contacts.map((c) => (
        <ContactDetail contact={c} />
      ))}
    </div>
  );
}

export function ContactDetail({ contact }: { contact: Contact }) {
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
}

export function ContactDetailEdit({ contact }: { contact: Contact }) {
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
          className="input input-md"
          placeholder="First name"
          value={contact.firstName}
        />
      </label>
      <label className="floating-label">
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          className="input input-md"
          placeholder="Last name"
          value={contact.lastName}
        />
      </label>
      <label className="floating-label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          className="input input-md"
          placeholder="Email"
          value={contact.email}
        />
      </label>
      <button class="btn">Submit</button>
      <button class="btn" hx-get={`/contact/${contact.id}`}>
        Cancel
      </button>
    </form>
  );
}

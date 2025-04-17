import type { IdParam } from "../model";

export function ContactDetail({ id }: IdParam) {
  return (
    <div hx-target="this" hx-swap="outerHTML">
      <div>
        <label>First Name</label>: Joe
      </div>
      <div>
        <label>Last Name</label>: Blow
      </div>
      <div>
        <label>Email</label>: joe@blow.com
      </div>
      <button hx-get={`/contact/${id}/edit`} class="btn primary">
        Click To Edit
      </button>
    </div>
  );
}

export function ContactDetailEdit(params: IdParam) {
  return (
    <form hx-put={`/contact/${params.id}`} hx-target="this" hx-swap="outerHTML">
      <label className="floating-label">
        <span>First Name</span>
        <input
          type="text"
          name="firstName"
          className="input input-md"
          placeholder="First name"
          value="Joe"
        />
      </label>
      <label className="floating-label">
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          className="input input-md"
          placeholder="Last name"
          value="Blow"
        />
      </label>
      <label className="floating-label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          className="input input-md"
          placeholder="Email"
          value="joe@blow.com"
        />
      </label>
      <button class="btn">Submit</button>
      <button class="btn" hx-get="/contact/1">
        Cancel
      </button>
    </form>
  );
}

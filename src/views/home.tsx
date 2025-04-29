import type { FC } from "hono/jsx";

export const Data = () => (
  <div>
    <p className="font-bold underline">{new Date().toISOString()}</p>
    <button hx-get="/" hx-target="body">
      Close
    </button>
  </div>
);

const ContactFilters: FC = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="form-control w-full lg:max-w-xs">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search contacts..."
            className="input w-full pr-12"
          />
          <button className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <i data-lucide="search" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <select className="select select-bordered max-w-xs">
          <option value="">All Categories</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="family">Family</option>
          <option value="friend">Friend</option>
        </select>

        <select className="select select-bordered max-w-xs">
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </div>
  );
};

export const Home = () => (
  <div className="drawer lg:drawer-open min-h-screen">
    <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Mobile Header */}
      <div className="sticky top-0 z-30 flex items-center justify-between bg-base-100 px-4 py-2 shadow-sm lg:hidden">
        <div className="flex items-center gap-2">
          <label
            htmlFor="drawer-toggle"
            className="btn btn-square btn-ghost drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <h1 className="text-xl font-bold">Contact Management</h1>
        </div>
        <button size="sm">Add Contact</button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:p-6 w-full">
        {/* Desktop Page Title & Actions */}
        <div className="mb-6 hidden items-center justify-between lg:flex">
          <h1 className="text-2xl font-bold">Contacts</h1>
          <button className="btn btn-sm">
            <i data-lucide="plus" className="w-5 h-5 mr-2" />
            Add Contact
          </button>
        </div>
        <ContactFilters />
        {/* Contact List */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"></div>
      </main>
    </div>
  </div>
);

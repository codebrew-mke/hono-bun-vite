export const Data = () => (
    <div>
        <p className="font-bold underline">{new Date().toISOString()}</p>
        <button hx-get="/" hx-target="body">
            Close
        </button>
    </div>
);

export const Home = () => (
    <div
        className="flex flex-col items-center justify-center h-screen text-center"
    >
        <h1 className="text-purple-500">Hello World!</h1>
        <button class="" hx-get="/data" hx-target="#data-container">
            Fetch Data
        </button>
        <div className="mt-8" id="data-container">
            No data fetched yet...
        </div>
    </div>
);
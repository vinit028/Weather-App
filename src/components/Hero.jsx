import search from "../assets/search.png";
import location from "../assets/edit_location.png";
import bg from "../assets/backgroundImg.jpg";

function Hero({ city, setCity, onSearch, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <section className="relative h-[40vh] min-h-80 overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Sky"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5">
        <h2 className="mb-6 text-center text-4xl font-bold text-white md:text-5xl">
          What's the weather like?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl items-center overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Location + Input */}
          <div className="flex flex-1 items-center px-5">
            <img
              src={location}
              alt="Location"
              className="mr-4 h-6 w-6 shrink-0 object-contain"
            />

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for a city..."
              className="w-full bg-transparent py-5 text-lg text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Vertical Divider */}
          <div className="h-10 w-px bg-slate-300" />

          {/* Search Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-full items-center gap-2 px-6 font-semibold text-slate-800 transition hover:bg-slate-200 disabled:opacity-60"
          >
            <img
              src={search}
              alt="Search"
              className="h-7 w-7 object-contain"
            />

            <span>{loading ? "Searching..." : "Search"}</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
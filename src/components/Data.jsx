import location from "../assets/location.png";
import wind from "../assets/wind.png";
import drops from "../assets/drops.png";
import visibility from "../assets/visibility.png";
import gauge from "../assets/gauge.png";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";

function Data({ weather }) {
  if (!weather) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-4 text-6xl">🌤️</div>

          <h2 className="text-2xl font-bold text-slate-700">
            Search for a city
          </h2>

          <p className="mt-2 text-slate-500">
            Enter a city above to see its current weather.
          </p>
        </div>
      </main>
    );
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Location */}
      <div className="mb-8 flex items-center gap-3">
        <img src={location} alt="Location" className="h-7 w-7 object-contain" />

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {weather.name}, {weather.sys.country}
          </h2>

          <p className="capitalize text-slate-500">
            {weather.weather[0].description}
          </p>
        </div>
      </div>

      {/* Main Weather */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Temperature */}
        {/* Temperature */}
<div className="rounded-3xl bg-white p-8 shadow-sm">
  <div className="flex items-center gap-4">
    
    {/* Weather Icon Background */}
    <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-black/20">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="h-24 w-24"
      />
    </div>

    <div>
      {/* Current Temperature */}
      <div className="text-6xl font-bold text-slate-900">
        {Math.round(weather.main.temp)}°
      </div>

      <p className="text-slate-500">
        Feels like {Math.round(weather.main.feels_like)}°
      </p>
    </div>
  </div>

  {/* Min / Max */}
  <div className="mt-8 border-t pt-6">
    <div className="mt-3 flex items-center justify-between">
      <span className="flex items-center gap-2 text-slate-500">
        Maximum
      </span>

      <span className="font-semibold">
        <span className="text-red-500">↑ </span>
        {Math.round(weather.main.temp_max)}°
      </span>
    </div>
    
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-slate-500">
        Minimum
      </span>

      <span className="font-semibold">
        <span className="text-blue-500">↓ </span>
        {Math.round(weather.main.temp_min)}°
      </span>
    </div>


  </div>
</div>

        {/* Details */}
        <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
          <WeatherCard
            icon={drops}
            title="Humidity"
            value={`${weather.main.humidity}%`}
          />

          <WeatherCard
            icon={wind}
            title="Wind"
            value={`${weather.wind.speed} m/s`}
          />

          <WeatherCard
            icon={gauge}
            title="Pressure"
            value={`${weather.main.pressure} hPa`}
          />

          <WeatherCard
            icon={visibility}
            title="Visibility"
            value={`${(weather.visibility / 1000).toFixed(1)} km`}
          />
        </div>
      </div>

      {/* Sunrise / Sunset */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <WeatherCard
          icon={sunrise}
          title="Sunrise"
          value={formatTime(weather.sys.sunrise)}
        />

        <WeatherCard
          icon={sunset}
          title="Sunset"
          value={formatTime(weather.sys.sunset)}
        />
      </div>
    </main>
  );
}

function WeatherCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm">
      <div className="rounded-2xl bg-slate-100 p-4">
        <img
          src={icon}
          alt={title}
          className="h-8 w-8 object-contain"
        />
      </div>

      <div>
        <p className="text-sm text-slate-500">{title}</p>

        <p className="mt-1 text-xl font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Data;
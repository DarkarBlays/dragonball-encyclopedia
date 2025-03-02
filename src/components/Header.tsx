import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import Spiner from "./Spiner";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    race: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchraces = useAppStore((state) => state.fetchraces);
  const searchRaces = useAppStore((state) => state.searchRaces);
  const { items } = useAppStore((state) => state.races);

  useEffect(() => {
    fetchraces();
  }, [fetchraces]);

  const uniqueRaces = Array.from(
    new Set(items.map((item) => item.race))
  ).filter(Boolean);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
      console.log("La raza es obligatoria");
      return;
    }

    setIsLoading(true); // Activar el spinner

    // Esperar la carga real de los datos
    const fetchData = searchRaces(searchFilters);

    // Esperar 3 segundos antes de quitar el spinner
    await Promise.all([
      fetchData,
      new Promise((resolve) => setTimeout(resolve, 1000)), // Espera mínima de 3s
    ]);

    setIsLoading(false); // Desactivar el spinner después de 3s
  };

  return (
    <header
      className={
        isHome
          ? "bg-[url(/dbbgh1.jpg)] bg-center bg-cover"
          : "bg-[url(/dbbgf.jpg)] bg-cover p-20"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-20" src="/dragonball.svg" alt="Logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-500 text-white uppercase font-bold rounded-2xl p-2"
                  : "bg-white text-orange-500 uppercase font-bold rounded-2xl p-2"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-500 text-white  uppercase font-bold rounded-2xl p-2"
                  : "bg-white text-orange-500 uppercase font-bold rounded-2xl p-2"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 shadow-2xl my-20 p-8 rounded-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="race"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Raza
              </label>
              <select
                id="race"
                name="race"
                className="p-3 w-full rounded-lg focus:outline-none bg-white text-gray-800 shadow-md appearance-none relative"
                onChange={handleChange}
                value={searchFilters.race}
              >
                <option value="" className="text-gray-500">
                  -- Seleccione --
                </option>
                {uniqueRaces.map((race) => (
                  <option
                    key={race}
                    value={race}
                    className="max-h-52 overflow-hidden"
                  >
                    {race}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full p-2 rounded-lg uppercase flex justify-center items-center"
              disabled={isLoading} // Desactiva el botón mientras carga
            >
              {isLoading ? <Spiner /> : "Filtrar Personajes"}
            </button>
          </form>
        )}
      </div>
    </header>
  );
}

import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchraces = useAppStore((state) => state.fetchraces)

  const { items } = useAppStore((state) => state.races);

  useEffect(() => {
    fetchraces()
  },[fetchraces])

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
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 shadow-2xl my-20 p-8 rounded-lg space-y-6">
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
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
              >
                <option value="">-- Seleccione --</option>
                {items.map((item) => (
                  <option key={item.race} value={item.race}>
                    {item.race}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Filtrar Personajes"
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}

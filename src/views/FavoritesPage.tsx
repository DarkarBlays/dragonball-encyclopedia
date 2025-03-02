import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import CharacterCard from "../components/CharacterCard";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);

  const hasFavorites = useMemo(() => favorites.length, [favorites]);

  console.log(favorites)
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center py-6 leading-tight">
        🟠 Personajes <span className="text-green-500">Favoritos 🐉</span>
        <span className="text-red-500">🉐</span>
      </h1>

      {hasFavorites ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
          {favorites.map((item) => (
            <CharacterCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">Los favoritos se mostrarán aquí</p>
      )}
    </div>
  );
}

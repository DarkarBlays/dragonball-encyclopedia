import { useEffect, useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import CharacterCard from "../components/CharacterCard";

export default function IndexPage() {
  const { items } = useAppStore((state) => state.characters);

  const searchCharacters = useAppStore((state) => state.searchCharacters);

  useEffect(() => {
    searchCharacters();
  }, [searchCharacters]);

  const hasCharacters = useMemo(() => items.length, [items]);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center py-6 leading-tight">
        🟠 Personajes <span className="text-green-500">🐉</span>
        <span className="text-red-500">🉐</span>
      </h1>

      {hasCharacters ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
          {items.map((item) => (
            <CharacterCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl text-gray-600 animate-pulse">
          No hay resultados aún, utiliza el formulario para buscar personajes.
        </p>
      )}
    </div>
  );
}

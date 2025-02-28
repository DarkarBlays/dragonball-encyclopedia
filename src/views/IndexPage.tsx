import { useEffect, useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import CharacterCard from "../components/CharacterCard";

export default function IndexPage() {
  const items = useAppStore((state) => state.characters.items);
  
  const itemsfilter = useAppStore((state) => state.charactersfilter);

  const searchCharacters = useAppStore((state) => state.searchCharacters);

  useEffect(() => {
    searchCharacters();
  }, [searchCharacters]);

  const hasCharacters = useMemo(() => itemsfilter.length > 0, [itemsfilter]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center py-6 leading-tight">
        🟠 Personajes <span className="text-green-500">🐉</span>
        <span className="text-red-500">🉐</span>
      </h1>

      {hasCharacters ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
          {itemsfilter.map((item) => (
            <CharacterCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
          {items.map((item) => (
            <CharacterCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

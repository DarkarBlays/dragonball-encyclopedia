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
    <>
      <h1 className="text-6xl font-extrabold">
      🟠 Personajes 🐉🉐
      </h1>
      {hasCharacters ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {items.map((item) => (
            <CharacterCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No hay resultados aun, Utiliza el formilario para buscar personajes.
        </p>
      )}
    </>
  )
}

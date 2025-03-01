import { useAppStore } from "../stores/useAppStore";
import { Item } from "../types";

type CharacterProps = {
  item: Item;
};

export default function CharacterCard({ item }: CharacterProps) {

  const selectCharacter = useAppStore((state) => state.selectCharacter)

  return (
    <div className="flex flex-col items-center w-72 border shadow-lg rounded-lg p-5 bg-white">
      <div className="overflow-hidden w-72 max-h-64 flex justify-center">
        <img
          src={item.image}
          alt={`Imagen de ${item.name}`}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      <h2 className="text-2xl font-black mt-3 text-center text-gray-900">
        {item.name}
      </h2>

      <div className="mt-2 text-center text-gray-700 font-medium space-y-1">
        <p className="text-lg">
          <span className="font-bold text-gray-900">Raza:</span> {item.race}
        </p>
        <p className="text-lg">
          <span className="font-bold text-gray-900">Miembro:</span>{" "}
          {item.affiliation}
        </p>
      </div>

      <button
        type="button"
        className="bg-orange-500 hover:bg-orange-600 mt-4 w-full py-3 font-bold text-white text-lg rounded-lg shadow-md transition-all duration-300 ease-in-out" onClick={() => selectCharacter(item.id)}
      >
        Ver Personaje
      </button>
    </div>
  );
}

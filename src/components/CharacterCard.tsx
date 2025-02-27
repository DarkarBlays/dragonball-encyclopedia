import { Item } from "../types"

type CharacterProps = {
  item: Item
}

export default function CharacterCard({item}: CharacterProps) {

  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={`Imagen de ${item.name}`}
          className="w-full justify-center hover:scale-125 transition-transform hover:rotate-2"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{item.name}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">
          Ver Personaje
        </button>
      </div>
    </div>
  )
}

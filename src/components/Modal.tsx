import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";
import TransformationCard from "./TransformationCard";
import DescriptionWithToggle from "./DescriptionWithToggle";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);

  const closeModal = useAppStore((state) => state.closeModal);

  const selectedCharacter = useAppStore((state) => state.selectedCharacter);

  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite);

  const favoriteExists = useAppStore((state) => state.favoriteExists);

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-gray-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {selectedCharacter.name}
                  </DialogTitle>
                  <img
                    src={selectedCharacter.image}
                    alt={`Imagen de ${selectedCharacter.name}`}
                    className="mx-auto w-50"
                  />

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Informacion
                  </DialogTitle>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <p>
                      <span className="font-bold text-gray-700">Raza:</span>{" "}
                      {selectedCharacter.race}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Género:</span>{" "}
                      {selectedCharacter.gender}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Ki:</span>{" "}
                      {selectedCharacter.ki}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Ki Máx:</span>{" "}
                      {selectedCharacter.maxKi}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">Miembro:</span>{" "}
                      {selectedCharacter.affiliation}
                    </p>
                    <p>
                      <span className="font-bold text-gray-700">
                        Planeta de Origen:
                      </span>{" "}
                      {selectedCharacter.originPlanet?.name ?? "Desconocido"}
                    </p>
                  </div>

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Descripcion
                  </DialogTitle>
                  {selectedCharacter.description && (
                    <DescriptionWithToggle
                      text={selectedCharacter.description}
                    />
                  )}

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Transformaciones
                  </DialogTitle>
                  <div className="flex flex-wrap justify-center gap-4">
                    {selectedCharacter.transformations &&
                    selectedCharacter.transformations.length > 0 ? (
                      selectedCharacter.transformations.map(
                        (transformation) => (
                          <TransformationCard
                            key={transformation.id}
                            transformation={transformation}
                          />
                        )
                      )
                    ) : (
                      <p className="text-lg text-gray-600 font-semibold">
                        Este personaje no tiene transformaciones.
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500 "
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>

                    <button
                      type="button"
                      className="w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                      onClick={() => handleClickFavorite(selectedCharacter)}
                    >
                      {favoriteExists(selectedCharacter.id)
                        ? "Eliminar de Favoritos"
                        : "Agregar a Favoritos"}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

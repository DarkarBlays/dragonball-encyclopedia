import { Transformations } from "../types";

type TransformationProps = {
  transformation: Transformations;
};

export default function TransformationCard({
  transformation,
}: TransformationProps) {
  return (
    <div className="bg-orange-400 p-4 rounded-lg shadow-lg text-center w-48 h-64 flex flex-col items-center justify-between">
      <div className="overflow-hidden w-50 h-50 flex items-center justify-center">
        <img
          src={transformation?.image}
          alt={transformation?.name}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h2 className="text-sm text-white font-bold">
        {transformation?.name}
      </h2>
      <p className="text-xs text-gray-900 font-bold">Ki: <span className="text-gray-100 font-semibold">{transformation?.ki}</span></p>
    </div>
  );
}

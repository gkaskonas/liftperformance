import Image, { StaticImageData } from "next/image";

export interface ITrainerProps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  description: string;
  name: string;
}

export default function Trainer({
  trainer,
  onClick,
  onClose,
  selected,
}: {
  trainer: ITrainerProps | undefined;
  onClick?: () => void;
  onClose?: () => void;
  selected: boolean;
}) {
  if (!trainer) throw new Error();

  const { imageUrl, title, description, name } = trainer;

  return selected ? (
    <div className="bg-grey-600 flex w-1/2 justify-center px-10">
      <Image
        className="w-1/2  "
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
        onClick={onClick}
      />
      <div className="w-1/2 p-4">
        <h1 className="text-white-700 mb-2 text-xl font-bold">{title}</h1>
        <h2 className="text-lg font-bold text-white">{name}</h2>
        <p className="break-normal py-5 text-left text-white">{description}</p>
      </div>
    </div>
  ) : (
    <a href="#" className="group relative block bg-black" onClick={onClick}>
      <Image
        alt={title}
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {title}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

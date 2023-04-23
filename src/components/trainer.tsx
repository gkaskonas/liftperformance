import Image, { StaticImageData } from "next/image";

export interface ITrainerProps { id: number, imageUrl: StaticImageData; title: string; description: string; name: string }

export default function Trainer({ trainer, onClick, onClose, selected }: { trainer: ITrainerProps | undefined, onClick?: () => void, onClose?: () => void, selected: boolean }) {

    if (!trainer) throw new Error()

    const { imageUrl, title, description, name } = trainer;


    return (
        selected ?
            <div className="bg-grey-600 w-1/2 px-10 justify-center flex">
                <Image
                    className="w-1/2  "
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={500}
                    onClick={onClick} />
                <div className="p-4 w-1/2">
                    <h1 className="text-xl font-bold mb-2 text-white-700">{title}</h1>
                    <h2 className="text-white font-bold text-lg">{name}</h2>
                    <p className="text-white py-5 text-left break-normal">{description}</p>
                </div>
            </div>
            :
            <div className="bg-gray-700 shadow-lg  mx-5">
                <div
                    className="rounded-fu overflow-hidden cursor-pointer"
                    onClick={onClick}
                >
                    <Image
                        className="w-full h-full rounded-t-lg"
                        src={imageUrl}
                        alt={title}
                        width={500}
                        height={500}

                    />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2 text-white-700">{title}</h2>
                    <p className="text-white">{name}</p>
                </div>
            </div>
    );
}

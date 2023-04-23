import { useState } from "react";
import Trainer, { ITrainerProps } from "./trainer";

export default function TrainersList({ trainers }: { trainers: ITrainerProps[] }) {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (itemId: any) => {
        setSelectedItemId(itemId);
    };

    const handleCloseModal = () => {
        setSelectedItemId(null);
    };

    return (
        <div className="w-screen h-auto flex justify-center pb-16 pt-0">
            <div className="flex justify-center items-start ">
                {trainers.map((trainer: ITrainerProps) => (
                    <div key={trainer.id} className="mx-16 large">
                        <Trainer trainer={trainer} selected={false} onClick={() => handleItemClick(trainer.id)} />
                    </div>
                ))}
                {selectedItemId !== null && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75" onClick={handleCloseModal} >
                        <Trainer
                            trainer={trainers.find((item: ITrainerProps) => item.id === selectedItemId)}
                            onClose={() => setSelectedItemId(null)}
                            selected={true}
                        />
                    </div>
                )
                }
            </div >
        </div>
    );
}

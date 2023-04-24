import { useState } from "react";
import Trainer, { ITrainerProps } from "./trainer";

export default function TrainersList({
  trainers,
}: {
  trainers: ITrainerProps[];
}) {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId: any) => {
    setSelectedItemId(itemId);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-start justify-center ">
        {trainers.map((trainer: ITrainerProps) => (
          <div key={trainer.id} className="large mx-16">
            <Trainer
              trainer={trainer}
              selected={false}
              onClick={() => handleItemClick(trainer.id)}
            />
          </div>
        ))}
        {selectedItemId !== null && (
          <div
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75"
            onClick={handleCloseModal}
          >
            <Trainer
              trainer={trainers.find(
                (item: ITrainerProps) => item.id === selectedItemId,
              )}
              onClose={() => setSelectedItemId(null)}
              selected={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

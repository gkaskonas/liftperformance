"use client";

import Image from "next/image";
import React, { useState } from "react";

export type Trainer = {
  name: string;
  title: string;
  image: {
    id: string;
    height: number;
    width: number;
    url: string;
  };
  description: string;
};

export default function Team({ trainers }: { trainers: Trainer[] }) {
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedTrainer, setSelectedTrainer ] = useState<Trainer | null>(null); // specify the type of selectedTrainer

  const handleImageClick = (index: number) => {
    setSelectedTrainer(trainers[ index ]);
    setShowModal(true);
  };

  return (
    <section id="team" className="mt-12">
      <h1 className="mx-auto text-center text-4xl font-bold  sm:text-5xl">Meet the Team</h1>
      <div className="container mx-auto">
        <ul className="flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-2 py-12 sm:my-0 sm:flex-row sm:gap-5 lg:mx-auto md:w-full lg:w-3/4">
          {trainers.map((trainer: Trainer, index: number) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className="w-68 sm:w-[250px] card lg:w-[250px] xl:w-[330x] 2xl:w-[240px] 4xl:w-[270px]"
            >
              <figure className="">
                <Image
                  src={trainer.image.url}
                  alt={trainer.name}
                  height={trainer.image.height}
                  className="w-full transition-opacity opacity-0 duration-[0.5s]"
                  width={trainer.image.width}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={image => image.currentTarget.classList.remove("opacity-0")}
                />
              </figure>
              <div className="card-body items-center">
                <h1 className="card-title">{trainer.name}</h1>
                <h2 className="text-sm font-bold">{trainer.title}</h2>
                <p className="text-sm">Click to Learn More</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {showModal && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center  backdrop-blur-md"
          onClick={() => setShowModal(false)}
        >
          <div className="max-h-sm sticky mx-auto max-w-sm scroll-m-3 rounded-lg bg-slate-100 p-6 text-center text-black shadow-lg sm:max-h-screen sm:max-w-lg">
            <Image
              src={selectedTrainer!.image.url}
              alt={selectedTrainer!.name}
              className="mx-auto mb-6 w-2/3 xl:w-1/2 transition-opacity opacity-0 duration-[0.5s]"
              width={selectedTrainer!.image.width}
              height={selectedTrainer!.image.height}
              onLoad={image => image.currentTarget.classList.remove("opacity-0")}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <h1 className="mb-2 text-2xl font-bold">{selectedTrainer!.name}</h1>
            <p className="py-5 text-xl font-bold">{selectedTrainer!.title}</p>
            <p className="mt-2 text-sm sm:text-lg">{selectedTrainer?.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

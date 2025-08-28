"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  const handleImageClick = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
  };

  return (
    <section id="team" className="mt-12">
      <h1 className="mx-auto text-center text-4xl font-bold  sm:text-5xl">Meet the Team</h1>
      <div className="container mx-auto">
        <ul className="flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-2 py-12 sm:my-0 sm:flex-row sm:gap-5 lg:mx-auto md:w-full lg:w-3/4">
          {trainers.map((trainer: Trainer, index: number) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  onClick={() => handleImageClick(trainer)}
                  className="w-68 sm:w-[250px] card lg:w-[250px] xl:w-[330x] 2xl:w-[240px] 4xl:w-[270px] cursor-pointer"
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
              </DialogTrigger>

              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold">
                    {selectedTrainer?.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="text-center">
                  {selectedTrainer && (
                    <>
                      <Image
                        src={selectedTrainer.image.url}
                        alt={selectedTrainer.name}
                        className="mx-auto mb-6 w-2/3 rounded-lg transition-opacity opacity-0 duration-[0.5s]"
                        width={selectedTrainer.image.width}
                        height={selectedTrainer.image.height}
                        onLoad={image => image.currentTarget.classList.remove("opacity-0")}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <p className="mb-4 text-xl font-semibold text-gray-700">
                        {selectedTrainer.title}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedTrainer.description}
                      </p>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </ul>
      </div>
    </section>
  );
}

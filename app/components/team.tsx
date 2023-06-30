import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import brian from "../../public/clipped_brian.png";
import dennis from "../../public/clipped_dennis.png";
import eunice from "../../public/clipped_eunice.png";
import jane from "../../public/clipped_jane.png";

type Trainer = {
  name: string;
  title: string;
  image: StaticImageData;
  description: string;
};

export default function Team() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null); // specify the type of selectedTrainer
  const trainers: Trainer[] = [
    {
      name: "Jane Cheung",
      title: "Lead Coach / Co-Founder",
      image: jane,
      description:
        "Experience transformative fitness with Jane, an expert in injury rehab, mobility improvement, and prenatal/postnatal programs. With a scientific approach, she helps clients make lifestyle changes, achieve body shape goals, and unleash inner strength. Get results with Jane's precision and passion.",
    },
    {
      name: "Eunice Lai",
      title: "Lead Coach / Co-Founder",
      image: eunice,
      description:
        "Eunice, a former national rugby player, specializes in identifying and addressing the root cause of clients' aches and pains. Her bespoke programs restore strength, flexibility, and endurance through tailored mobility drills and client education. Experience pain-free living and a revitalized body with Eunice's expert guidance.",
    },
    {
      name: "Dennis Cheng",
      title: "Lead Coach / Co-Founder",
      image: dennis,
      description:
        "Meet Dennis, a highly qualified trainer and accomplished physique competitor. With expertise in body transformation and nutrition, he helps clients achieve their fitness goals. Whether you're a beginner or advanced, Dennis is dedicated to guiding you towards optimal health and strength. Elevate your fitness journey with his knowledge and support.",
    },
    {
      name: "Brian Lee",
      title: "Lead Coach / Co-Founder",
      image: brian,
      description:
        "Brian, an elite athlete and former national sportsman, empowers busy professionals to achieve their peak physical shape. He understands the unparalleled benefits of strength and health, boosting confidence, performance, and longevity. From personalized training sessions to lifestyle choices, Brian's meticulous approach ensures optimal performance. Join Brian and unlock your full potential.",
    },
    // add more trainers here
  ];

  const handleImageClick = (index: number) => {
    setSelectedTrainer(trainers[index]);
    setShowModal(true);
  };

  return (
    <section id="team" className="my-12 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
        Meet the Team
      </h2>
      <ul className="flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-8 py-12 sm:my-0 sm:flex-row">
        {trainers.map((trainer: Trainer, index: number) => (
          <li
            key={index}
            onClick={() => handleImageClick(index)}
            className="flex flex-col items-center rounded-3xl border border-solid border-gray-500 bg-black px-10 py-6 shadow-xl hover:cursor-pointer sm:max-w-md"
          >
            <Image
              src={trainer.image}
              alt={trainer.name}
              className="mb-6 w-3/4 "
              placeholder="blur"
              sizes="(min-width: 60em) 24vw,
              (min-width: 28em) 45vw,
              100vw"
            />
            <h3 className="text-center text-2xl font-bold text-white">
              {trainer.name}
            </h3>
            <h3 className="text-center text-lg font-bold text-slate-400">
              {trainer.title}
            </h3>
            <h3 className="text-center text-sm italic text-white">
              Click To Learn More
            </h3>
          </li>
        ))}
      </ul>
      {showModal && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setShowModal(false)}
        >
          <div className="max-h-sm sticky mx-auto max-w-sm scroll-m-3 rounded-lg bg-gray-800 p-6 text-center shadow-lg sm:max-h-screen sm:max-w-lg">
            <Image
              src={selectedTrainer!.image}
              alt={selectedTrainer!.name}
              className="mx-auto mb-6 w-2/3"
              sizes="(min-width: 60em) 24vw,
              (min-width: 28em) 45vw,
              100vw"
            />
            <h3 className="mb-2 text-2xl font-bold text-slate-300">
              {selectedTrainer!.name}
            </h3>
            <p className="py-5 text-xl font-bold text-slate-300">
              {selectedTrainer!.title}
            </p>
            <p className="mt-2 text-sm text-slate-300 sm:text-lg">
              {selectedTrainer?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import brian from "../../public/photos/clipped_brian.jpg";
import dennis from "../../public/photos/clipped_dennis.jpg";
import eunice from "../../public/photos/clipped_eunice.jpg";
import jane from "../../public/photos/clipped_jane.jpg";

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
      name: "Brian Lee",
      title: "Lead Coach / Co-Founder",
      image: brian,
      description:
        "Brian, an elite athlete and former national sportsman, empowers busy professionals to achieve their peak physical shape. He understands the unparalleled benefits of strength and health, boosting confidence, performance, and longevity. From personalized training sessions to lifestyle choices, Brian's meticulous approach ensures optimal performance. Join Brian and unlock your full potential.",
    },
    {
      name: "Dennis Cheng",
      title: "Lead Coach / Co-Founder",
      image: dennis,
      description:
        "Meet Dennis, a highly qualified trainer and accomplished physique competitor. With expertise in body transformation and nutrition, he helps clients achieve their fitness goals. Whether you're a beginner or advanced, Dennis is dedicated to guiding you towards optimal health and strength. Elevate your fitness journey with his knowledge and support.",
    },
    {
      name: "Eunice Lai",
      title: "Lead Coach / Co-Founder",
      image: eunice,
      description:
        "Eunice, a former national rugby player, specializes in identifying and addressing the root cause of clients' aches and pains. Her bespoke programs restore strength, flexibility, and endurance through tailored mobility drills and client education. Experience pain-free living and a revitalized body with Eunice's expert guidance.",
    },
    // add more trainers here
  ];

  const handleImageClick = (index: number) => {
    setSelectedTrainer(trainers[index]);
    setShowModal(true);
  };

  return (
    <section id="team" className="my-12 px-6">
      <h1 className="mx-auto text-center text-4xl font-bold  sm:text-5xl">
        Meet the Team
      </h1>
      <div className="container mx-auto">
      <ul className="flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-2 py-12 sm:my-0 sm:flex-row sm:gap-5 lg:mx-auto lg:w-3/4">
        {trainers.map((trainer: Trainer, index: number) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="w-68 xl:w-[340px] 2xl:w-[250px] card"
          >
            <figure className="">
              <Image
                src={trainer.image}
                alt={trainer.name}
                className="w-1/2 lg:w-full"
                placeholder="blur"
                priority={true}
                sizes="(min-width: 60em) 24vw,
              (min-width: 28em) 45vw,
              100vw"
              />
            </figure>
            <div className="card-body items-center">
              <h1 className="card-title">{trainer.name}</h1>
              <h2 className="font-bold text-sm">{trainer.title}</h2>
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
              src={selectedTrainer!.image}
              alt={selectedTrainer!.name}
              placeholder="blur"
              className="mx-auto mb-6 w-2/3 xl:w-1/2"
              priority={true}
              sizes="(min-width: 60em) 24vw,
              (min-width: 28em) 45vw,
              100vw"
            />
            <h1 className="mb-2 text-2xl font-bold">{selectedTrainer!.name}</h1>
            <p className="py-5 text-xl font-bold">{selectedTrainer!.title}</p>
            <p className="mt-2 text-sm sm:text-lg">
              {selectedTrainer?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

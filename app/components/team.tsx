import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import brian from "../../public/clipped_brian.jpg";
import dennis from "../../public/clipped_dennis.jpg";
import eunice from "../../public/clipped_eunice.jpg";
import jane from "../../public/clipped_jane.jpg";

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
        "Jane’s continuous pursuit of coaching excellence, led to her scientific approach and laser focus on form and movement analysis - perfect for those seeking injury rehabilitation or mobility improvement. She is also experienced in both pre & post natal programs and is a qualified pilates reformer instructor. An ambitious, results driven person, Jane is passionate about helping clients make positive lifestyle changes, meet body shape goals and get strong from the inside out.",
    },
    {
      name: "Eunice Lai",
      title: "Lead Coach / Co-Founder",
      image: eunice,
      description:
        "Having overcome her own injuries from playing national level rugby, Eunice specialises in addressing the root cause of aches and pains our clients experience, and helps them to achieve painless living. She understands that with the physical stresses of today’s intense work culture and prolonged hours of sitting, it’s important to have a regular training regime. Eunice’s bespoke programs involve restoring strength, flexibility and endurance through the use of different mobility drills and an emphasis on client education of the importance and role these exercises play.",
    },
    {
      name: "Dennis Cheng",
      title: "Lead Coach / Co-Founder",
      image: dennis,
      description:
        "A highly qualified and experienced trainer, Dennis is also a natural physique competitor, placing 2nd in Hong Kong in 2021. Specialising in body transformation, he knows expertly how to balance fitness with diet and nutrition. As someone who is always striving to improve his own knowledge and training skills, he loves helping others do the same. His aim as a coach is to train clients at all levels of their fitness journey, guiding them to be healthier and stronger.",
    },
    {
      name: "Brian Lee",
      title: "Lead Coach / Co-Founder",
      image: brian,
      description:
        "As an elite athlete and former national level sportsman Brian helps busy professionals develop their best physical shape. He deeply believes the effects of being strong and healthy are incomparable - boosting confidence, performance at work, and most importantly, longevity. His meticulous focus from training sessions to lifestyle choices are all geared towards clients achieving optimal performance. Whatever your goals are, Brian is with you 100%.",
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
            className="flex flex-col items-center rounded-3xl border border-solid border-gray-500 bg-black px-10 py-6 shadow-xl sm:max-w-md"
          >
            <Image
              src={trainer.image}
              alt={trainer.name}
              className="mb-6 w-3/4 hover:cursor-pointer"
              onClick={() => handleImageClick(index)}
              height={1024}
              width={1024}
            />
            <h3 className="text-center text-2xl font-bold text-white">
              {trainer.name}
            </h3>
            <h3 className="text-center text-xl font-bold text-gray-500">
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
              height={1024}
              width={1024}
            />
            <h3 className="mb-2 text-2xl font-bold text-slate-300">
              {selectedTrainer!.name}
            </h3>
            <p className="py-5 text-xl font-bold text-slate-300">
              {selectedTrainer!.title}
            </p>
            <p className="mt-4 text-lg text-slate-300">
              {selectedTrainer?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

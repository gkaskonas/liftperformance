import Image, { StaticImageData } from 'next/image';
import trainer1 from "../../public/trainer1.png"
import trainer2 from "../../public/trainer2.png"
import { useState } from 'react';

type Trainer = {
  name: string;
  title: string;
  image: StaticImageData;
  description: string
}


export default function Team() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null); // specify the type of selectedTrainer
  const trainers: Trainer[] = [
    {
      name: 'John Doe',
      title: 'Senior Trainer',
      image: trainer1,
      description: "With over 10 years of experience in the fitness industry, John has helped numerous clients achieve their fitness goals. His passion for fitness started when he was a teenager and he has never looked back. John believes that fitness is not just about working out but also about developing a healthy lifestyle. He is committed to helping clients find their inner strength and achieve their fitness goals."
    },
    {
      name: 'Jane Smith',
      title: 'Fitness Trainer',
      image: trainer2,
      description: "Certified nutritionist and fitness coach with a unique approach to training. She understands that every client has different needs and creates personalized programs that cater to their individual requirements. John is passionate about helping clients achieve their fitness goals through a combination of proper nutrition, exercise, and positive thinking. With her guidance, you can develop a healthy lifestyle and maintain your fitness levels."
    },
    {
      name: 'Jane Smith',
      title: 'Fitness Trainer',
      image: trainer2,
      description: "Certified nutritionist and fitness coach with a unique approach to training. She understands that every client has different needs and creates personalized programs that cater to their individual requirements. John is passionate about helping clients achieve their fitness goals through a combination of proper nutrition, exercise, and positive thinking. With her guidance, you can develop a healthy lifestyle and maintain your fitness levels."
    },
    {
      name: 'Jane Smith',
      title: 'Fitness Trainer',
      image: trainer2,
      description: "Certified nutritionist and fitness coach with a unique approach to training. She understands that every client has different needs and creates personalized programs that cater to their individual requirements. John is passionate about helping clients achieve their fitness goals through a combination of proper nutrition, exercise, and positive thinking. With her guidance, you can develop a healthy lifestyle and maintain your fitness levels."
    },
    // add more trainers here
  ];

  const handleImageClick = (index: number) => {
    setSelectedTrainer(trainers[index]);
    setShowModal(true);
  };

  return (
    <section id="team" className="p-6 my-12">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">Meet the Team</h2>
      <ul className='list-none py-12 place-items-center my-12 sm:my-0 flex flex-col sm:flex-row items-center justify-center flex-wrap gap-8'>
        {trainers.map((trainer: Trainer, index: number) => (
          <li key={index} className="sm:max-w-md flex flex-col items-center border border-solid border-gray-500 bg-black py-6 px-10 rounded-3xl shadow-xl">
            <Image src={trainer.image} alt={trainer.name} className="w-3/4 mb-6 hover:cursor-pointer" onClick={() => handleImageClick(index)} />
            <h3 className='text-2xl font-bold text-center text-white'>{trainer.name}</h3>
            <h3 className='text-xl font-bold text-center text-gray-500'>{trainer.title}</h3>
            <h3 className='lg:hidden text-sm italic text-center text-white'>Click On to Learn More</h3>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="max-w-sm sm:max-w-lg max-h-sm sm:max-h-screen scroll-m-3 sticky mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <Image src={selectedTrainer!.image} alt={selectedTrainer!.name} className="w-2/3 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">{selectedTrainer!.name}</h3>
            <p className="text-slate-300 text-xl font-bold py-5">{selectedTrainer!.title}</p>
            <p className="mt-4 text-slate-300 text-lg">{selectedTrainer?.description}</p>
          </div>
        </div>
      )}

    </section>
  );
}

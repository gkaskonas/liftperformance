import Image, { StaticImageData } from "next/image";
import group from "../../public/group.jpeg";
import natal from "../../public/natal.jpeg";
import service1 from "../../public/personal.jpeg";
import pilates from "../../public/pilates.jpeg";

type Service = {
  name: string;
  image: StaticImageData | string;
  description: string;
};

export default function Services() {
  const services: Service[] = [
    {
      name: "1-to-1 training",
      description:
        "Get personalized results with One-to-One Training! Our coaches will design a program tailored to your body, starting with a 1-hour consultation. From the training floor to check-ins, we're committed to helping you achieve your goals.",
      image: service1,
    },
    {
      name: "Small Group Training ",
      description:
        "Join Lift's Small Group Trainings for big results! Build muscle, improve cardio fitness, and lose weight in a supportive and motivating environment. Our coaches and your group will keep you working hard towards your helth and fitness goals.",
      image: group,
    },
    {
      name: "Reformer Pilates Training",
      description:
        "Transform your body with Reformer Pilates training! Improve your body awareness, posture, flexibility, and develop a strong core. Our Reformers allow for greater range of motion and resistance during exercises for even better results.",
      image: pilates,
    },
    {
      name: "Pre & Post-Natal Training",
      description:
        "Prepare for motherhood and recover with our Pre and Postnatal Training! Our program addresses common pregnancy-related injuries, stabilizes your pelvis postpartum, and repairs and strengthens your muscles. Trust us to support you on this journey!",
      image: natal,
    },
  ];
  return (
    <section id="services" aria-label="Services" className="my-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
          Services
        </h1>
      </div>

      <ul className="flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-8 sm:gap-2 py-12 sm:my-0 sm:flex-row">
        {services.map((service: Service, index: number) => (
          <li
          className="flex flex-col items-cente bg-black px-10 py-6 shadow-xl md:max-w-xs lg:max-w-md"
          key={index}
          >
            <div>
              <Image
                className="mx-auto"
                src={service.image}
                alt="service image"
                loading="lazy"
                placeholder="blur"
                width={384}
              />
            </div>
            <div className="mx-auto w-3/4 text-center antialiased sm:w-auto">
              <h5 className="my-4 mb-2 text-center text-lg sm:text-xl font-bold leading-tight text-neutral-50 dark:text-neutral-50 ">
                {service.name}
              </h5>
              <p className="sm:text-md mx-auto text-sm md:w-full text-neutral-200 antialiased md:text-lg lg:w-4/5 leading-tight text-center">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

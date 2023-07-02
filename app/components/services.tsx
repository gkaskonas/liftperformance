import Image, { StaticImageData } from "next/image";
import group from "../../public/group.jpg";
import natal from "../../public/natal.jpg";
import service1 from "../../public/personal.jpg";
import pilates from "../../public/pilates.jpg";

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
        "Prepare for motherhood and recover with our Pre and Postnatal Training! Our program addresses common pregnancy-related injuries, stabilizes your pelvis postpartum, and repairs and strengthens your muscles. Trust us to support you on this exciting journey!",
      image: natal,
    },
  ];
  return (
    <section id="services" aria-label="Services" className="my-12">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
          Services
        </h3>
      </div>

      <div className="mx-auto list-none flex-col place-items-center items-center justify-center gap-2 text-center sm:w-2/3 lg:grid lg:grid-cols-2">
        {services.map((service: Service, index: number) => (
          <li
            className="items-center rounded-3xl  px-12 py-3 shadow-xl"
            key={index}
          >
            <div>
              <Image
                className="mx-auto h-40 w-40 rounded-md sm:h-60 sm:w-60"
                src={service.image}
                alt="service image"
                width={512}
                height={512}
              />
            </div>
            <div className="mx-auto w-3/4 text-center antialiased sm:w-auto">
              <h5 className="my-4 mb-2 text-center text-xl font-bold leading-tight text-neutral-50 dark:text-neutral-50 sm:text-xl">
                {service.name}
              </h5>
              <p className="sm:text-md mx-auto text-sm text-neutral-200 antialiased sm:text-lg lg:w-2/3">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}

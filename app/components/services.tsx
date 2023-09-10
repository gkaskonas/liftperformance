import Image, { StaticImageData } from "next/image";
import group from "../../public/photos/group.jpeg";
import natal from "../../public/photos/natal.jpeg";
import service1 from "../../public/photos/personal.jpeg";
import pilates from "../../public/photos/pilates.jpeg";
import flexibility from "../../public/photos/flexibility_clipped.jpg";

type Service = {
  name: string;
  image: StaticImageData | string;
  description: string;
};

export default function Services() {

  const services: Service[] = [
    {
      name: "1-to-1 Training",
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
    {
      name: "Flexibility & Mobility Training",
      description:
        "Enhance your flexibility and mobility with our transformative training program. From beginners to advanced practitioners, our class offers a diverse range of exercises that cater to all skill levels. Join us today and unlock the full potential of your body's movement capabilities!",
      image: flexibility,
    },
  ];
  return (
    <section id="services" aria-label="Services" className="my-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-2 text-center text-4xl font-bold  sm:text-5xl">
          Services
        </h1>
      </div>
      <div className="gap-2 sm:gap-5 mt-10 sm:flex-grow flex flex-col sm:w-[90%]">
        {services.map((service: Service, index: number) => (
          <div className={(index % 2 === 0) ? "card sm:card-side max-w-5xl mx-auto motion-safe:animate-fadeIn" : "card sm:card-side max-w-5xl mx-auto sm:flex-row-reverse motion-safe:animate-fadeIn"} key={index}>
            <figure className="mb-0">
              <div className="w-[90%] sm:w-[95%]">
                <Image
                  className="object-contain w-full "
                  src={service.image}
                  alt="service image"
                  loading="lazy"
                  placeholder="blur"
                  width={1024}
                />
              </div>
            </figure>
            <div className="card-body max-w-xl md:max-w-2xl">
              <h2 className="text-xl md:text-2xl mb-15 mt-0 text-center card-title">{service.name}</h2>
              <p className="text-lg xl:text-xl leading-tight mt-4 text-left">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

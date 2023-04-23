
import trainer1Image from "../../public/trainer1.webp"
import TrainersList from '@/components/trainers'
const items = [
  {
    id: 1,
    imageUrl: trainer1Image,
    title: 'Lead Coach / Co-Founder',
    description: 'Jane’s continuous pursuit of coaching excellence, led to her scientific approach and laser focus on form and movement analysis - perfect for those seeking injury rehabilitation or mobility improvement. She is also experienced in both pre & post natal programs and is a qualified pilates reformer instructor. An ambitious, results driven person, Jane is passionate about helping clients make positive lifestyle changes, meet body shape goals and get strong from the inside out.',
    name: "Jane Cheung"
  },
  {
    id: 2,
    imageUrl: trainer1Image,
    title: 'Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: "Jane Cheung"
  },
  {
    id: 3,
    imageUrl: trainer1Image,
    title: 'Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: "Jane Cheung"
  },
  {
    id: 4,
    imageUrl: trainer1Image,
    title: 'Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: "Jane Cheung"
  },

];

export default function Team() {
  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <h1 className="font-bold text-2xl py-10"> Meet the Team</h1>
      <TrainersList trainers={items} />
    </div>
  )
}
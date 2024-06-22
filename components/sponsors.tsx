import { cn } from '@/utils/cn';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from '@tabler/icons-react';

export default function Sponsors() {
  return (
    <>
      <div className="pb-10 pt-5 bg-[#fc9cbb] p-5">
        <h1 className="text-5xl sm:text-9xl text-center sm:text-center font-bold text m-5 bg-clip-text text-black">
          Our Sponsors
        </h1>
        <BentoGrid className="max-w-4xl mx-auto mb-5">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 0 || i === 3 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}
const Skeleton = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#ffb3c6]">
    <img className="w-full h-full p-3 rounded-lg" src={src} alt="skeleton" />
  </div>
);
const items = [
  {
    title: 'Vercel',
    description:
      'Vercel is a platform for developers that provides the tools, workflows, and infrastructure you need to build and deploy your web apps faster, without the need for additional configuration.',
    header: (
      <Skeleton src="https://cloud-anv9dskak-hack-club-bot.vercel.app/0vercel-logotype-dark.svg" />
    )
  },
  {
    title: 'Postman',
    description: 'Postman is an API platform for building and using APIs.',
    header: (
      <Skeleton src="https://cloud-rm9r68hco-hack-club-bot.vercel.app/0postman-logo-orange-2021.svg" />
    )
  },
  {
    title: '.XYZ',
    description:
      ".XYZ is the world's favorite new domain ending. It's short, memorable, and bold",
    header: (
      <Skeleton src="https://cloud-lfm8w3gzt-hack-club-bot.vercel.app/0xyz-logo-color.svg" />
    )
  },
  {
    title: 'CodeDay',
    description:
      'CodeDay is a non-profit providing welcoming, hands-on opportunities for under-served students to explore a future in tech and beyond.',
    header: (
      <Skeleton src="https://cloud-m00mn1qwa-hack-club-bot.vercel.app/0codeday-text-black.svg" />
    )
  }
];

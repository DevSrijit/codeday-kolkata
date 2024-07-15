import { NextPage, GetStaticProps } from 'next';
import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Hero from '../components/hero';
import Email from '../components/email';
import Community from '../components/community';
import Workshops from '../components/workshops';
import CodeDay from '../components/codeday';
import JoinUs from '../components/join-us';
import { workshopEvents } from '@/utils/data';
import howrahSticker from '@/public/img/cdk_howrah_sticker.png';

import {
  DraggableContext,
  DraggableInterface
} from '../context/DraggableContext';
import Footer from '../components/footer';
import Sponsors from '@/components/sponsors';
import Image from 'next/image';

interface HomeFetchedEventsProps {
  fetchedEvents: Array<any>;
  randomBarCode: string;
}

const Home: NextPage<HomeFetchedEventsProps> = ({
  fetchedEvents,
  randomBarCode
}) => {
  //console.log(fetchedEvents);
  // Disable draggable feature on small screen
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const [draggable, setDraggable] = useState<boolean>(false);
  const [redirecting, setRedirecting] = useState<boolean>(false);

  const value = useMemo<DraggableInterface>(
    () => ({ draggable, setDraggable }),
    [draggable]
  );

  const resizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    if (windowSize.width > 640) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  };

  useEffect((): any => {
    if (window.innerWidth > 640) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  }, []);

  useEffect((): any => {
    const currentDate = new Date();
    const currentISTDate = new Date(
      currentDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
    );
    const targetDate = new Date('2024-07-17T00:00:00+05:30'); // Change the target date as needed

    if (currentISTDate < targetDate) {
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = 'https://event.codeday.org/en-US/kolkata';
      }, 2000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  if (redirecting) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <div className="text-center">
          <Image
            src={howrahSticker}
            alt="CodeDay Kolkata Logo"
            className="mx-auto mb-8"
          />
          <h1 className="text-3xl font-bold mb-4">
            Redirecting to CodeDay Kolkata
          </h1>
          <p className="text-lg mb-4">
            You are being redirected to{' '}
            <a href="#" className="text-primary underline">
              https://codeday.org/kolkata
            </a>
            .
          </p>
          <p className="text-lg mb-4">
            All current requests are being shifted to the registration page.
          </p>
          <p className="text-lg">
            If you&apos;d like to experience our own website, please visit{' '}
            <a
              href="https://site.cdkol.live"
              className="text-primary underline"
              target="_blank"
            >
              site.cdkol.live
            </a>{' '}
            or{' '}
            <a
              href="https://cdkol.xyz"
              className="text-primary underline"
              target="_blank"
            >
              cdkol.xyz
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <DraggableContext.Provider value={value}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Head>
            <title>CodeDay Kolkata</title>
          </Head>
          <Analytics />
          <SpeedInsights />
          <Hero />
          <hr className="border-2 border-black border-dashed" />
          <Email />
          <hr className="border-2 border-black border-dashed" />
          <Community />
          <Sponsors />
          <Workshops
            fetchedEvents={fetchedEvents}
            randomBarCode={randomBarCode}
          />
          <CodeDay />
          <JoinUs />
          <Footer />
        </div>
      </DraggableContext.Provider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchedEvents: Array<any> = workshopEvents;
  let randomBarCode = '';
  for (let i = 0; i < 5; i++) {
    randomBarCode += Math.floor(Math.random() * 10);
    randomBarCode += '    ';
  }
  return {
    props: {
      fetchedEvents: JSON.parse(JSON.stringify(fetchedEvents)),
      randomBarCode
    },
    revalidate: 60
  };
};

export default Home;

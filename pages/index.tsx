import { NextPage } from 'next';
import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Hero from '../components/hero';
import Email from '../components/email';
import Community from '../components/community';
import Workshops from '../components/workshops';
import CodeDay from '../components/codeday';
import JoinUs from '../components/join-us';
import { workshopEvents } from '@/utils/data';

import {
  DraggableContext,
  DraggableInterface
} from '../context/DraggableContext';
import Footer from '../components/footer';

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
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  return (
    <DraggableContext.Provider value={value}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Head>
          <meta property="og:site_name" content="CodeDay Kolkata" />
          <meta property="og:name" content="CodeDay Kolkata" />
          <meta property="og:title" content="CodeDay Kolkata" />
          <meta property="og:image" content="/img/intro.png" />
          <meta
            property="og:description"
            content="A 24 hours coding event where students collaborate, learn, and build kick-ass technical projects 💛⚡️"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:type" content="website" />
          <title>CodeDay Kolkata</title>
        </Head>
        <Analytics />
        <SpeedInsights />
        <Hero />
        <hr className="border-2 border-black border-dashed" />
        <Email />
        <hr className="border-2 border-black border-dashed" />
        <Community />
        <Workshops
          fetchedEvents={fetchedEvents}
          randomBarCode={randomBarCode}
        />
        <CodeDay />
        <JoinUs />
        <Footer />
      </div>
    </DraggableContext.Provider>
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

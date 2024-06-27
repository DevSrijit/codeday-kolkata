import Linktree from '@/components/linktree';
import Head from 'next/head';

export default function Links() {
  return (
    <>
      <Linktree />
      <Head>
        <title>CodeDay Kolkata Linktree</title>
        <meta name="title" content="CodeDay Kolkata" />
        <meta
          name="description"
          content="A 24 hours coding event where students collaborate, learn, and build kick-ass technical projects 💛⚡️"
        />
        <meta
          name="keywords"
          content="codeday, codeday kolkata, code kolkata, codeday in kolkata, kolkata coding, coding in kolkata, coding tutorial in kolkata, events in kolkata, hackathon, teenager coding, coding, hackathon in kolkata, kolkata hackathon, teenager event in kolkata, teenager hackathon, coding for teenagers, high school event, high school coding, high school hackathon, hackathon for high schoolers, coding event for high schoolers"
        />
        <meta property="og:site_name" content="CodeDay Kolkata" />
        <meta property="og:url" content="https://cdkol.live/" />
        <meta property="og:name" content="CodeDay Kolkata" />
        <meta property="og:title" content="CodeDay Kolkata" />
        <meta property="og:image" content="https://cdkol.live/img/intro.png" />
        <meta
          property="og:description"
          content="A 24 hours coding event where students collaborate, learn, and build kick-ass technical projects 💛⚡️"
        />
        <meta property="twitter:url" content="https://cdkol.live/" />
        <meta property="twitter:title" content="CodeDay Kolkata" />
        <meta
          property="twitter:description"
          content="A 24 hours coding event where students collaborate, learn, and build kick-ass technical projects 💛⚡️"
        />
        <meta
          property="twitter:image"
          content="https://cdkol.live/img/intro.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="2 days" />
      </Head>
    </>
  );
}

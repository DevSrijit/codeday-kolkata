import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="CodeDay Kolkata" />
        <meta
          name="description"
          content="A 24 hours coding event where students collaborate, learn, and build kick-ass technical projects 💛⚡️"
        />
        <meta
          name="keywords"
          content="codeday, codeday kolkata, code kolkata, codeday in kolkata, kolkata coding, coding in kolkata, coding tutorial in kolkata, events in kolkata, hackathon, teenager coding, coding, hackathon in kolkata, kolkata hackathon, teenager event in kolkata, teenager hackathon, coding for teenagers, high school event, high school coding, high school hackathon, hackathon for high schoolers, coding event for high schoolers"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="2 days"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { useEffect, useState } from 'react';
import { madeWith } from '../utils/data';
import FooterLinks from './footer-links';

const Footer = () => {
  const [randomMadeWith, setRandomMadeWith] = useState('');
  useEffect(() => {
    setRandomMadeWith(madeWith[Math.floor(Math.random() * madeWith.length)]);
  }, []);
  return (
    <div className="bg-amber-100 border-t-4 border-black py-12 px-4">
      <div className="max-w-xl mx-auto flex flex-col gap-6 text-center">
        <p className="text-lg">
          Made with {randomMadeWith} •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://github.com/purduehackers/site"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
            >
              Open source
            </a>
          </span>{' '}
          •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://vercel.com?utm_source=purdue-hackers&utm_campaign=oss"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
            >
              Powered by ▲Vercel
            </a>
          </span>
        </p>
        <FooterLinks />
        <p className="text-xs mt-4">
          The Vercel, Postman, .XYZ, and CodeDay logos are trademarks of their
          respective owners and are used here to acknowledge the support
          provided to us. No endorsement or ownership by us is implied, nor
          should it be inferred.
        </p>
      </div>
    </div>
  );
};

export default Footer;

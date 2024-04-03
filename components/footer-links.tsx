import {
  SiInstagram as Instagram,
  SiGithub as Github,
  SiThreads as Threads,
  SiLinkedin as Linkedin,
  SiX as X
} from '@icons-pack/react-simple-icons';

const FooterLinks = () => (
  <div className="flex flex-row justify-center gap-x-8">
    <a
      href="https://github.com/CodeDay-Kolkata"
      className="transition hover:scale-110"
      target="_blank"
    >
      <Github height={32} width={32} />
    </a>
    <a
      href="https://www.threads.net/@codeday_kolkata"
      className="transition hover:scale-110 hover:text-discord-vibrant"
      target="_blank"
    >
      <Threads height={32} width={32} />
    </a>
    <a
      href="https://www.instagram.com/codeday_kolkata"
      className="transition hover:scale-110 hover:text-[#c32aa3]"
      target="_blank"
    >
      <Instagram height={32} width={32} />
    </a>
    <a
      href="https://twitter.com/CodeDayKolkata"
      className="transition hover:scale-110 hover:text-[#1DA1F2]"
      target="_blank"
    >
      <X height={32} width={32} />
    </a>
    <a
      href="https://www.linkedin.com/company/codeday-kolkata/"
      className="transition hover:scale-110 hover:text-[#1DA1F2]"
      target="_blank"
    >
      <Linkedin height={32} width={32} />
    </a>
  </div>
);

export default FooterLinks;

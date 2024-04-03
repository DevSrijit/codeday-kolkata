import DiscordWindow from './discord-window';
import { discordMessages } from '../utils/data';

const Community = () => (
  <div className="bg-yellow-discord-role">
    <div className="flex flex-col p-6 sm:p-12">
      <h1 className="text-5xl sm:text-9xl text-center sm:text-left font-bold">
        Community
      </h1>
      <div className="flex flex-col items-center">
        <div className="z-10 flex flex-col gap-2 absolute translate-y-40 w-11/12 p-4 border-4 border-black shadow-email shadow-gray-900/70 bg-white max-w-xl">
          <h1 className="font-bold text-3xl sm:text-4xl text-center mb-3">
            Find Your People 🌈
          </h1>
          <p>
            Joining a CodeDay event is like stepping into a world of endless
            possibilities! It&apos;s not just about coding; it&apos;s about making
            friends, growing skills, and having a blast. Imagine learning,
            creating, and laughing together in a super welcoming setting. And
            hey, the CodeDay Discord server? It&apos;s like a cozy online hangout
            where you can keep the fun going, get help, and connect with awesome
            folks.
            <br></br>
            Share what you&apos;ve made in{' '}
            <span className="channel-name">#magic-happening</span>, chat about
            rainbows in <span className="channel-name">#lounge</span>, get a
            quick laugh at <span className="channel-name">#memes</span>
            —wherever you look, you&apos;ll find weird, kind, radically
            inclusive, and <span className="italic">really cool</span> people.
          </p>
          <p>
            Enter a world of magic, find people who push you to be your best
            self, and make awesome things together.
          </p>
          <a
            href="https://discord.gg/codeday"
            target="_blank"
            className="mx-auto mt-4"
          >
            <button className="p-2 border-2 border-black hover:bg-discord-light transition duration-100 font-bold text-center mx-auto text-xl">
              Join the Community
            </button>
          </a>
        </div>
        <div id="messages" className="flex flex-col items-center mt-8 sm:mt-16">
          {discordMessages.map((message, i) => (
            <DiscordWindow key={i} {...message} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Community;

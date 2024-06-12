import Draggable from 'react-draggable';
import { useContext } from 'react';
import { DraggableContext } from '../context/DraggableContext';
import {
  SiGithub,
  SiInstagram,
  SiThreads,
  SiX
} from '@icons-pack/react-simple-icons';

const Linktree = () => {
  const { draggable } = useContext(DraggableContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen bg-[#adabe7] gap-y-4 h-screen sm:h-screen">
        <Draggable disabled={!draggable}>
          <div className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-[#ff686b] lg:w-auto">
            <h1 className="text-4xl font-bold text-center sm:text-3xl lg:text-5xl">
              CodeDay Kolkata
            </h1>
            <h3 className="text-center font-medium pt-3">
              Find out links down below !
            </h3>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://cdn.cdkol.live/registration-guide"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  Registration Guide for CodeDay Kolkata 2024.
                </a>
              </p>
            </div>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://www.codeday.org/help/codeday/student"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  Frequently Asked Questions (FAQs) ❓
                </a>
              </p>
            </div>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://www.instagram.com/codeday_kolkata"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiInstagram className="inline-block w-6 h-6 mr-2" />{' '}
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://x.com/CodeDayKolkata"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiX className="inline-block w-6 h-6 mr-2" /> X
                </a>
              </p>
            </div>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://www.threads.net/@codeday_kolkata"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiThreads className="inline-block w-6 h-6 mr-2" /> Threads
                </a>
              </p>
            </div>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://github.com/CodeDay-Kolkata"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiGithub className="inline-block w-6 h-6 mr-2" /> Github
                </a>
              </p>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default Linktree;

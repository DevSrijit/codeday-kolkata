import Draggable from 'react-draggable';
import { useContext } from 'react';
import { DraggableContext } from '../context/DraggableContext';
import {
  SiGithub,
  SiGooglephotos,
  SiInstagram,
  SiLinktree,
  SiThreads,
  SiWikipedia,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const Linktree = () => {
  const { draggable } = useContext(DraggableContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 lg:py-0 min-h-screen bg-[#adabe7] gap-y-4 overflow-auto">
        <Draggable disabled={!draggable}>
          <div className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-[#ff686b] lg:w-auto">
            <h1 className="text-4xl font-bold text-center sm:text-3xl lg:text-8xl">
              CodeDay Kolkata
            </h1>
            <h3 className="text-center font-medium pt-3">
              Find our links down below !
            </h3>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                <a
                  href="https://cdkol.live/"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  {' '}
                  <SiLinktree className="inline-block w-6 h-6 mr-2" /> CodeDay
                  Kolkata 🌐
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
                  href="https://www.codeday.org/"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiLinktree className="inline-block w-6 h-6 mr-2" /> Official
                  CodeDay Website 🌐
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
                  href="https://cdn.cdkol.live/registration-guide"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiLinktree className="inline-block w-6 h-6 mr-2" />{' '}
                  Registration Guide for CodeDay Kolkata 2024. 📝
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
                  <SiLinktree className="inline-block w-6 h-6 mr-2" />{' '}
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
                  href="https://assets.cdkol.live/Singapore%202024%20video.mp4"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiYoutube className="inline-block w-6 h-6 mr-2" /> A sneak
                  peek into a CodeDay 📹
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
                  href="https://cdn.cdkol.live/cdk23-pics"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiGooglephotos className="inline-block w-6 h-6 mr-2" /> Snaps
                  from CodeDay Kolkata 2023 📸
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
                  href="https://en.wikipedia.org/wiki/CodeDay#CodeDay"
                  className="transition hover:scale-110 hover:text-[#c32aa3]"
                  target="_blank"
                >
                  <SiWikipedia className="inline-block w-6 h-6 mr-2" /> CodeDay
                  Wikipedia Page 📖
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
      </div>
    </>
  );
};

export default Linktree;

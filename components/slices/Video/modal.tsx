import { useEffect, useState } from "react";
import Image from "next/image";

import { useGlobal } from "@/lib/store";

type props = {
  open: boolean;
  action: () => void;
  ytUrl: string;
};

export default function VideoModal({ open, action, ytUrl }: props) {
  const scroller = useGlobal((s) => s.scroller);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        action();
      }
    };
    setIsOpen(open);
    if (isOpen) {
      window.addEventListener("keydown", handleKeyPress);
      scroller?.stop();
    } else {
      window.removeEventListener("keydown", handleKeyPress);
      scroller?.start();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress); // Limpia el event listener cuando el componente se desmonta
    };
  }, [open, isOpen, scroller, action]);
  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 h-screen w-screen bg-[#ffe4c400] backdrop-blur-sm z-10"
    >
      <div className="flex items-center flex-col justify-center h-full w-full">
        <div className="sm:w-1/2 w-11/12 flex flex-col">
          <div className="bg-green p-2 sm:p-4 rounded-xl relative">
            <button
              onClick={action}
              className="absolute top-6 right-6 bg-black p-2 z-10 rounded-full w-9 h-9 grid place-content-center opacity-30 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x text-white"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <iframe
              className="aspect-video w-full rounded-md"
              src={ytUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </dialog>
  );
}

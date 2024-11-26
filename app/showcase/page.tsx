import React from "react";

import { Link as TransitionLink } from "next-transition-router";

function Ejem() {
  return (
    <main>
      <section className="bg-yellow min-h-dvh p-10">
        <div className=" space-y-10">
          <h1 className="text-4xl text-green font-extrabold items-center justify-center gap-4 flex">
            Esto es un titulo
          </h1>

          <div className="flex gap-8 items-center">
            <h2 className="text-2xl text-verde font-text font-bold text-center uppercase">
              Esto es un h2
            </h2>
            <p className="text-verde font-text font-bold">
              Esto es un parrafo Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab, voluptate.
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <h2 className="text-2xl text-green font-text text-center uppercase">
              Esto es un titulo en uppercase
            </h2>
            <p className="text-green font-text">
              Esto es un parrafo con el texto verde
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="bg-green h-20 w-20 rounded-full"></div>
          <div className="bg-yellow h-20 w-20 rounded-full border-4 border-green"></div>
          <div className="bg-orange h-20 w-20 rounded-full"></div>
          <div className="bg-bluelight h-20 w-20 rounded-full"></div>
        </div>

        <TransitionLink href="/" className="underline underline-offset-4">
          home
        </TransitionLink>
      </section>
    </main>
  );
}

export default Ejem;

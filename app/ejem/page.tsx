import React from "react";

import { Link as TransitionLink } from "next-transition-router";

function Ejem() {
  return (
    <main>
      <section>
        <h1 className="text-green text-4xl">pagina de ejemplo para probar la transición</h1>
        <p>This is section 1.</p>
        <TransitionLink href="/" className="underline underline-offset-4">
          home
        </TransitionLink>
      </section>
    </main>
  );
}

export default Ejem;

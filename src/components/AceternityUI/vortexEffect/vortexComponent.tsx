import React from "react";
import { Vortex } from "../vortexEffect/vortex.tsx";

export function VortexDemoSecond() {
  return (
    (<div
      className="w-screen mx-auto rounded-md  h-screen overflow-hidden absolute">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
          
      </Vortex>
    </div>)
  );
}

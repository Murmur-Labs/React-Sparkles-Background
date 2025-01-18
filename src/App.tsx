import React from "react";
import { SparklesCore } from "./components/ui/sparkles";

export default function App() {
  return (
    <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlescolorful"
          background="black"
          minSize={0.4}
          maxSize={1}
          particleDensity={600}
          className="w-full h-full"
          particleColor="#FFA500"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-normal text-center text-[#FFA500] font-['VT323']">
          The Future
        </h1>
        <p className="text-[#FFA500] cursor-default text-center text-2xl font-['VT323']">
          is brighter than you think
        </p>
      </div>
    </div>
  );
}

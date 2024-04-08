"use client";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Vignette } from "@react-three/postprocessing";
import AllSections from "./AllSections";
import ButterflyAnimation from "./ButterflyAnimation";

const LandingPage = () => {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <>
      <header className='app-header'>
        <img src='assets/logo.png' className="app-logo" alt="logo" />
      </header>

      <Canvas style={{ background: "#0d0d0d" }} shadows>

        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
          <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
          <Vignette eskil={false} offset={.1} darkness={1.5} />
        </EffectComposer>

        <Environment preset='warehouse' />

        <ambientLight intensity={0.5} />
        <spotLight position={[0, 25, 0]} angle={10.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

        <ScrollControls pages={6} damping={0.25}>
          <Scroll>
            <ButterflyAnimation playMusic={playMusic} />
          </Scroll>

          <Scroll html style={{ width: '100%', height: '100%' }}>
            <AllSections />
          </Scroll>
        </ScrollControls>
      </Canvas>

      <div className='fixed bottom-6 right-10'>
        <button
          className='relative rounded-full bg-white flex items-center justify-center w-[36px] h-[36px]'
          style={{ boxShadow: '1px 1px 25px 10px rgba(255, 255, 255, 0.5)' }}
          onClick={() => { setPlayMusic(!playMusic) }}
        >
          {
            playMusic ?
              <img src="/assets/icons/musicOn.svg" alt="musicOn" />
              :
              <img src="/assets/icons/musicOff.svg" alt="musicOff" />
          }
          <span className="motion-safe:animate-[ping_4s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-white opacity-65 -z-10"></span>
          <span className="motion-safe:animate-[ping_4s_2s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-white opacity-65 -z-10"></span>
        </button>
      </div>
    </>
  )
}

export default LandingPage
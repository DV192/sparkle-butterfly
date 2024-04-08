import { Float, PositionalAudio, Sparkles } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { BlueButterfly } from './BlueButterfly';
import { AttacusAtlasButterfly } from './AttacusAtlasButterfly';

const ButterflyAnimation = ({ playMusic }) => {
  const music1 = useRef();
  const music2 = useRef();
  const music3 = useRef();

  useEffect(() => {
    if (music1.current && music2.current && music3.current) {
      
    }
  }, [playMusic])

  return (
    <>
      {/* top */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <BlueButterfly
          rotation-x={Math.PI * 0.05}
          rotation-y={Math.PI * (2 / 1)}
          rotation-z={Math.PI / 8}
          position={[0, -1, 0]}
          scale={5}
        />

        <AttacusAtlasButterfly
          rotation-x={Math.PI / 8}
          rotation-y={0}
          rotation-z={0}
          scale={0.5}
          position={[-8, 0, -6]}
        />

        <AttacusAtlasButterfly
          rotation-x={Math.PI / 16}
          rotation-y={0}
          rotation-z={0}
          scale={0.5}
          position={[10, -4, -10]}
        />
      </Float>
      {/* top */}

      {/* middle */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-10, -20]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <AttacusAtlasButterfly
          rotation-x={Math.PI / 4}
          rotation-y={0}
          rotation-z={0}
          scale={0.8}
          position={[-3, -8.5, -3]}
        />

        <BlueButterfly
          rotation-x={Math.PI * 0.05}
          rotation-y={Math.PI * (2 / 1)}
          rotation-z={Math.PI / 8}
          position={[12, -14, -8]}
          scale={5}
        />
      </Float>
      {/* middle */}

      {/* middle */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-14, -35]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <BlueButterfly
          rotation-x={Math.PI * (1 / 8)}
          rotation-y={0}
          rotation-z={0}
          position={[-4, -27.5, -2]}
          scale={3}
        />

        <AttacusAtlasButterfly
          rotation-x={Math.PI / 4}
          rotation-y={0}
          rotation-z={0}
          scale={0.8}
          position={[0, -22, -10]}
        />

        <BlueButterfly
          rotation-x={Math.PI * (1 / 8)}
          rotation-y={0}
          rotation-z={0}
          position={[3, -30, 2]}
          scale={3}
        />
      </Float>
      {/* middle */}

      <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20, 100, 20]}></Sparkles>
      <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30, 100, 10]} ></Sparkles>

      {
        playMusic && <>
          <group position={[0, 0, 0]}>
            <PositionalAudio ref={music1} autoplay loop url='/assets/sounds/ambient.mp3' distance={1.2} />
          </group>
          <group position={[0, -20, 0]}>
            <PositionalAudio ref={music2} autoplay loop url='/assets/sounds/ambient-rain.mp3' distance={3} />
          </group>
          <group position={[0, -40, 0]}>
            <PositionalAudio ref={music3} autoplay loop url='/assets/sounds/ambient-happy.mp3' distance={1.2} />
          </group>
        </>
      }
    </>
  )
}

export default ButterflyAnimation
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Room } from "./Room";
import { Gaming } from "./Gaming";
import { Group } from "three";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
    const isTablet = false;
    const isMobile = false;

  return (
    <Canvas camera={{position: [0, 1, 5], fov: 2}}>
        
        <HeroLights />
        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={7}
        minDistance={3}
        minPolarAngle={50 * (Math.PI / 180)}  // or just maxPolarAngle={1.745}
        maxPolarAngle={80 * (Math.PI / 180)}  // or just maxPolarAngle={1.745}
        />
        <group position={[0.02, -0.095, 0.05]} scale={isTablet? 0.8:1} rotation={[0, 75 ,0]} >

        <Gaming/>
        </group>
    </Canvas>
  )
}

export default HeroExperience
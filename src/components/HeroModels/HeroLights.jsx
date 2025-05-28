import React from 'react'
import * as THREE from 'three'
const HeroLights = () => {
  return (
    <>
        <spotLight 
            position={[4,5,6]}
            intensity={80}
            angle={1.2}
            color="green"
        />
        <spotLight 
            position={[1,2,3]}
            intensity={10}
            angle={1.2}
            color="white"
        />
        <spotLight 
            position={[-3,5,5]}
            intensity={60}
            angle={0.4}
            color="blue"
        />
        <primitive
            object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
            position={[1, 3, 4]}
            intensity={0.5}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}    
        />
       

    </>
  )
}

export default HeroLights
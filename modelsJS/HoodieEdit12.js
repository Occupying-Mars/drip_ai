import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Model({ ...props }) {

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.test005.geometry}
        material={materials["lambert1.001"]}
        position={[-2.65, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[-2.66, 0.39, 0.09]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        material-map={imgTexture}
      />
    </group>
  );
}

useGLTF.preload("/HoodieEdit12.glb");

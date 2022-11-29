import { Configuration, OpenAIApi } from "openai";
import React, { useRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three";

export default function Hoodie({img, ...props }) {
    const imgTexture = useTexture(url);
    imgTexture.wrapS = THREE.RepeatWrapping;
    imgTexture.repeat.x = - 1;
    const group = useRef()
    const { nodes, materials } = useGLTF('/Hoodie.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.test005.geometry} rotation={[Math.PI/2, 0, 0]}/>
      <mesh geometry={nodes.Plane005.geometry} material={nodes.Plane005.material} position={[0, 0.4, 0.12]} rotation={[-Math.PI / 2, 0, Math.PI]} material-map={imgTexture}/>
    </group>
  )
}

useGLTF.preload('/Hoodie.glb')


// https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80
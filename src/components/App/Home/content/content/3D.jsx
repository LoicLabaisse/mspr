import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {View} from 'react-native'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import {useFrame, useLoader} from '@react-three/fiber'
import {TextureLoader} from "three/src/loaders/TextureLoader";


const Vuedimension = (props) => {
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )}

export default Vuedimension;
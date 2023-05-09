import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {useFrame, useLoader} from "@react-three/fiber";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader.js";
import {TextureLoader, THREE} from 'expo-three';
import {View} from "react-native";



const Vuedimension = (props) => {


    const ref = useRef();


    useFrame((state,delta)=>{
        ref.current.rotation.x += delta
    })

    return (

        <mesh   ref={ref} position={[0, 0, 0]}>
            <cylinderGeometry args={[1,1,3,8,1]} />
            <meshStandardMaterial color="orange" />
        </mesh>

    )
}

export default Vuedimension;
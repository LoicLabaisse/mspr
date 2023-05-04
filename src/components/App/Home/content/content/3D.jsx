import React from 'react';
import {View} from 'react-native'
import * as THREE from 'three'; // importe la version module

import ExpoTHREE, {Renderer} from "expo-three"
import {ExpoWebGLRenderingContext, GLView} from "expo-gl";


const D = () => {

    const onContextCreate = (gl) => {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.clearColor(0, 1, 1, 1);
        // Three js code


        const bufferWidth = gl.drawingBufferWidth
       const bufferHeight = gl.drawingBufferHeight
        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                bufferWidth / bufferHeight,
                0.1,
                1000
            )
            gl.canvas = {width: bufferWidth, height: bufferHeight}
            camera.position.z = 2

            const renderer = new Renderer();
            renderer.setSize(bufferWidth, bufferHeight)

            const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({
                color: "blue"
            })

            const cube = new THREE.Mesh(geometry, material)
            scene.add(cube)


            const render = () => {
                requestAnimationFrame(render);
                cube.rotation.x += 0.01
                cube.rotation.y += 0.01

                renderer.render(scene, camera);
                gl.endFrameEXP()


            }
            render()
        }catch (e) {
            console.log(e)
        }


    }
    return (
        <View>
            <GLView onContextCreate={onContextCreate}
                    style={{width: 500, height: 500}}
            />
        </View>
    );
};

export default D;
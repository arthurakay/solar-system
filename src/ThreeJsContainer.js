import {Object3D, Scene, WebGLRenderer} from 'three';
import Backdrop from './scene/Backdrop';
import React from 'react';
import Lights from './scene/Lights';
import Camera from './scene/Camera';
import Events from './scene/Events';
import Planet from'./scene/Planet';

import texture_earth from './assets/textures/earth.jpg';

export default class ThreeJsContainer extends React.Component {
    glContainer = null;
    scene = null;
    renderer = null;
    camera = null;
    rotating = null;

    componentDidMount() {
        this.init();
        this.animate();
    }

    initWebGLRenderer() {
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(window.innerWidth - 10, window.innerHeight - 10);

        // physically render
        this.glContainer.appendChild(this.renderer.domElement);
    }

    reRenderWebGLRenderer() {
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
    }

    animate = () => {
        this.controls.update();
        this.reRenderWebGLRenderer();
        requestAnimationFrame(this.animate);
    };

    init() {
        this.scene = new Scene();
        this.rotating = new Object3D();
        this.scene.add(this.rotating);
        Backdrop.renderBackdrop(this.rotating);

        this.camera = Camera.initCamera(this.scene);
        this.scene.add(this.camera);

        this.initWebGLRenderer();
        Lights.initLights(this.scene);


        this.controls = Events.initEvents(this.renderer, this.camera, this.rotating);

        // add things to the scene
        Planet.renderPlanet(this.rotating, texture_earth);
    }

    render() {
        return (
            <div>
                <div ref={(el) => { this.glContainer = el; }} id="glContainer"></div>
            </div>
        );
    }
}
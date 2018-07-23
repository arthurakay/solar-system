import {Object3D, Scene, WebGLRenderer} from 'three';
import Backdrop from './scene/Backdrop';
import React from 'react';
import Lights from './scene/Lights';
import Camera from './scene/Camera';
import Events from './scene/Events';
import Sphere from'./scene/Sphere';

import {Sun, Earth} from './utils/Planets';

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
        console.log(this.glContainer);
        this.renderer.setSize(this.glContainer.clientWidth, this.glContainer.clientHeight);

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
        Sphere.renderSphere(this.rotating, Sun);
        Sphere.renderSphere(this.rotating, Earth);
    }

    render() {
        return (
            <div
                ref={(el) => { this.glContainer = el; }}
                id="glContainer"
                className="App-body"
            />
        );
    }
}
import { AmbientLight } from 'three';

function initLights(scene) {
    scene.add(new AmbientLight({
        color: 0xffffff,
        intensity: 1.0
    }));
}

export default {
    initLights
};
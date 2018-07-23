import { PerspectiveCamera } from 'three';
import {DEFAULT_CAMERA, SIZE_FACTOR} from '../utils/Constants';

function initCamera(scene) {
    const cameraDistance = SIZE_FACTOR * DEFAULT_CAMERA;

    let camera = new PerspectiveCamera(         // https://en.wikipedia.org/wiki/Viewing_frustum
        12,                                     // Camera frustum vertical field of view
        window.innerWidth / window.innerHeight, // Camera frustum aspect ratio
        1,                                      // Camera frustum near plane
        cameraDistance * 100                    // Camera frustum far plane
    );
    camera.position.z = cameraDistance;
    camera.position.y = 0;
    camera.lookAt(scene.width / 2, scene.height / 2);

    return camera;
}

export default {
    initCamera
};
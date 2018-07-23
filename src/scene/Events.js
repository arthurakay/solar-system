import TrackballControls from './TrackballControls';

function initEvents(renderer, camera, object3D) {
    let controls = new TrackballControls(camera, document.body);
    controls.minDistance = 100.0;
    controls.maxDistance = 800.0;
    controls.dynamicDampingFactor = 0.1;

    initResize(renderer, camera);
    initKeyboard(camera, object3D);

    return controls;
}

function initKeyboard(camera, object3D) {
    let callback = (e) => {
        switch (e.keyCode) {
            case 38:
                // UP key
                object3D.rotateX(-0.5);
                break;

            case 40:
                // DOWN key
                object3D.rotateX(0.5);
                break;

            case 37:
                // LEFT key
                object3D.rotateY(-0.5);
                break;

            case 39:
                // RIGHT key
                object3D.rotateY(0.5);
                break;

            case 65:
                // A key
                camera.position.z -= 10;
                break;

            case 83:
                // S key
                camera.position.z += 10;
                break;

            default:
                break;
        }
    };

    // bind the resize event
    window.addEventListener('keydown', callback, false);

    // return .stop() the function to stop watching window resize
    return {
        /**
         * Stop watching window resize
         */
        stop: function() {
            window.removeEventListener('keydown', callback);
        }
    };
}

function initResize(renderer, camera) {
    let callback = () => {
        let minWidth = 1280,
            w = window.innerWidth;

        if (w < minWidth) {
            w = minWidth;
        }

        // notify the renderer of the size change
        renderer.setSize(w, window.innerHeight);

        // update the camera
        camera.aspect = w / window.innerHeight;
        camera.updateProjectionMatrix();
    };

    // bind the resize event
    window.addEventListener('resize', callback, false);

    // return .stop() the function to stop watching window resize
    return {
        /**
         * Stop watching window resize
         */
        stop: function() {
            window.removeEventListener('resize', callback);
        }
    };
}

export default {
    initEvents
};
import {SphereGeometry, Mesh, MeshPhongMaterial, TextureLoader, Vector3} from 'three';
import {SIZE_FACTOR} from '../utils/Constants';

const white = 0xFFFFFF;
const black = 0x0F0F0F;
const segments = 64;

function renderSphere(object3D, config) {
    let texture = new TextureLoader().load(config.surface);

    // create a black sphere
    let globeGeometry = new SphereGeometry(config.radius * SIZE_FACTOR, segments, segments);
    let globeMaterial = new MeshPhongMaterial({
        color: black
    });
    const opaqueSphere = new Mesh(globeGeometry, globeMaterial);

    let overlayGeometry = new SphereGeometry((config.radius * SIZE_FACTOR) + 0.1, segments, segments);
    let overlayMaterial = new MeshPhongMaterial({
        map: texture,

        emissiveMap: texture,
        emissive: white,
        emissiveIntensity: 1,

        opacity: 1.0,
        transparent: true,
        depthWrite: false
    });
    const overlaySphere = new Mesh(overlayGeometry, overlayMaterial);

    object3D.add(opaqueSphere, overlaySphere);
    opaqueSphere.position.setX(config.orbitalDistance * SIZE_FACTOR);
    overlaySphere.position.setX(config.orbitalDistance * SIZE_FACTOR);

}

export default {
    renderSphere
};
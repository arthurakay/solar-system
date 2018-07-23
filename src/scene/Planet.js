import {
    SphereGeometry, Mesh, MeshPhongMaterial, TextureLoader
} from 'three';

const white = 0xFFFFFF;
const black = 0x0F0F0F;

function renderPlanet(object3D, planetTexture) {
    let texture = new TextureLoader().load(planetTexture);

    // create a black sphere
    let globeGeometry = new SphereGeometry(15, 32, 32);
    let globeMaterial = new MeshPhongMaterial({
        color: black
    });
    object3D.add(new Mesh(globeGeometry, globeMaterial));

    let overlayGeometry = new SphereGeometry(15.1, 32, 32);
    let overlayMaterial = new MeshPhongMaterial({
        map: texture,

        emissiveMap: texture,
        emissive: white,
        emissiveIntensity: 1,

        opacity     : 1.0,
        transparent : true,
        depthWrite  : false
    });
    object3D.add(new Mesh(overlayGeometry, overlayMaterial));
}

export default {
    renderPlanet
};
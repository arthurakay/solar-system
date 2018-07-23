import {
    SphereGeometry, Mesh, MeshBasicMaterial, TextureLoader, BackSide
} from 'three';

// textures
import galaxy from '../assets/textures/galaxy_starfield.png';

function renderBackdrop(object3D) {
    let texture = new TextureLoader().load(galaxy);

    let geometry = new SphereGeometry(90, 32, 32);
    let material = new MeshBasicMaterial({
        //color: 0x000000,
        map: texture,
        side: BackSide
    });
    object3D.add(new Mesh(geometry, material));
}

export default {
    renderBackdrop
};
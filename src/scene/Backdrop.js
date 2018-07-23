import {SphereGeometry, Mesh, MeshBasicMaterial, TextureLoader, BackSide} from 'three';
import {Universe} from '../utils/Planets';
import {SIZE_FACTOR} from '../utils/Constants';

function renderBackdrop(object3D) {
    //let texture = new TextureLoader().load(Universe.surface);

    let geometry = new SphereGeometry(Universe.radius * SIZE_FACTOR, 32, 32);
    let material = new MeshBasicMaterial({
        color: 0x000000,
        //map: texture,
        side: BackSide
    });
    object3D.add(new Mesh(geometry, material));
}

export default {
    renderBackdrop
};
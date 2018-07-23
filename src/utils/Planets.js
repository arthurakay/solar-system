// textures
import texture_universe from '../assets/textures/galaxy_starfield.jpg';
import texture_sun from '../assets/textures/sun.jpg';
import texture_earth from '../assets/textures/earth.jpg';

import {AU, EARTH_YEAR, maxCameraDistance} from './Constants';

// objects
const Mercury = {
    name: "Mercury",
    radius: 4878 / 2,
    orbitalDistance: 579e5,
    orbitalPeriod: 0.24 * 365,
    rotationPeriod: 58.65,
    // texture:  textures.mercury,
    surface: "textures/mercury.jpg"
};

const Venus = {
    name: "Venus",
    radius: 12104 / 2,
    orbitalDistance: 1082e5,
    rotationPeriod: -243,
    orbitalPeriod: 0.62 * 365,
    tilt: 2.64,
    // texture:  textures.venus,
    surface: "textures/venus.jpg"
};

export const Earth = {
    name: "Earth",
    radius: 6371,
    orbitalDistance: 1 * AU,
    orbitalPeriod: 1 * EARTH_YEAR,
    rotationPeriod: 1,
    // texture:  textures.earth,
    tilt: 23.44,
    surface: texture_earth,
    satellites: [
        {
            name: "Moon",
            radius: 1737.10 / 2,
            orbitalDistance: 38e4,
            orbitalPeriod: 27.3,
            rotationPeriod: 0,
            tilt: 6.687,
            // texture:  textures.moon,
            surface: "textures/moon.jpg"
        }
    ]
};

const Mars = {
    name: "Mars",
    orbitalDistance: 2279e5,
    radius: 6787 / 2,
    rotationPeriod: 1.03,
    orbitalPeriod: 1.88 * 365,
    tilt: 25.19,
    // texture:  textures.mars,
    surface: "textures/mars.jpg",
    satellites: [
        {
            name: "Phobos",
            radius: 11.2667 / 2,
            orbitalDistance: 9400,
            orbitalPeriod: 7.65,
            rotationPeriod: 0,
            surface: "textures/phobos.jpg",
            // texture:  textures.phobos
        }
    ]
};

const Jupiter = {
    name: "Jupiter",
    radius: 1427960 / 2,
    orbitalPeriod: 11.86 * 365,
    orbitalDistance: 7783e5,
    rotationPeriod: 0.41,
    tilt: 3.13,
    // texture:  textures.jupiter,
    surface: "textures/jupiter.jpg"
    //satellites: [ ... ]
};

const Saturn = {
    name: "Saturn",
    radius: 120660 / 2,
    orbitalDistance: 1427e6,
    orbitalPeriod: 29.46 * 365,
    rotationPeriod: 0.44,
    // texture:  textures.saturn,
    tilt: 26.73,
    surface: "textures/saturn.jpg"
    //satellites: [ ... ]
};

const Uranus = {
    name: "Uranus",
    radius: 51118 / 2,
    orbitalDistance: 2871e6,
    orbitalPeriod: 84.01 * 365,
    rotationPeriod: -0.72,
    tilt: 97.77,
    // texture:  textures.uranus,
    surface: "textures/uranus.jpg"
    //satellites: [ ... ]
};

const Neptune = {
    name: "Neptune",
    radius: 48600 / 2,
    orbitalDistance: 44971e5,
    orbitalPeriod: 164.8 * 365,
    rotationPeriod: 0.72,
    tilt: 28.32,
    // texture:  textures.neptune,
    surface: "textures/neptune.jpg"
    //satellites: [ ... ]
};

export const Sun = {
    name: "Sun",
    radius: 1.39e6,
    orbitalDistance: 0,
    rotationPeriod: 24.47 * 24,
    orbitalPeriod: 0,
    // texture: textures.sun,
    surface: texture_sun,
    satellites: [
        Mercury,
        Venus,
        Earth,
        Mars,
        Jupiter,
        Saturn,
        Uranus,
        Neptune
    ]
};

export const Universe = {
    radius: maxCameraDistance,
    surface: texture_universe
};
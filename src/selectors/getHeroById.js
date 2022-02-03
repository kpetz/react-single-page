import { heroes } from "../data/heroes";

export const getHeroById = (heroeId = '') => {
    console.log('getHeroById');
    return heroes.find(heroe => heroe.id === heroeId);
};

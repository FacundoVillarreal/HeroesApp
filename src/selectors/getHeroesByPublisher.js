import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ["Marvel Comics", "DC Comics"];

    if (!validPublisher.includes(publisher)) {
        throw Error(`Publisher "${publisher}" no es correcto`)
    };

    return heroes.filter(hero => hero.publisher === publisher);
}

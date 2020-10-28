import error from './error.json';
import home from './home.json';
import about from './about.json';
import works from './works.json';
import { within } from '@testing-library/react';


const fr = {
    ...error, ...home,...about,...works,// On concatène tous nos objets JSON en un seul
};

export default fr;
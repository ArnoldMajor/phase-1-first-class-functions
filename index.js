const receivesAFunction = callback => callback();

function named() { };
const returnsANamedFunction = () => named;

const returnsAnAnonymousFunction = () => function () { };
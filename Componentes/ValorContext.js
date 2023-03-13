import React from 'react';

// Creamos el contexto con un valor inicial
const MyContext = React.createContext({
    count: 0,
    increment: () => { },
});

export default MyContext;
import { createContext } from "react";
import { useState } from "react";

const ValoresContext = createContext({
    valorGoogle: null,
})

export default ValoresContext;
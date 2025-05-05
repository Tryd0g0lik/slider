/**
 * src\App.tsx
*/
import React from "react";
import {createRoot} from "react-dom/client";
import { PagesRouter } from "src/components/Router";
const divRootHTML = document.getElementById("root");
if (!divRootHTML) {
  throw new Error('[App]: Something what woong! It is the "#root" was not found ');
  
}

createRoot(divRootHTML).render(
  <React.StrictMode>
    <PagesRouter />
  </React.StrictMode>
);
 

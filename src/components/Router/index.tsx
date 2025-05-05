/**
 * src\components\Router\index.tsx
 */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SliderFC } from "src/components/Slider";
const router_ = createBrowserRouter([
  {
    path: "/",
    element: (
      <SliderFC />
    )
  },
  
],
  {
    future: {
      v7_relativeSplatPath: true,
    }
  }
);

const pagesProvider = (
  <RouterProvider router={router_} future={{
    v7_startTransition: true,
  }}/>
);

type RouterType = typeof pagesProvider;

export function PagesRouter(): RouterType {
  return pagesProvider;
}

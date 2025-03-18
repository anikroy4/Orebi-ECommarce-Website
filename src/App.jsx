import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./components/RootLayouts/RootLayout";

function App() {
  
  let router= createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App

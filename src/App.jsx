import { Route, Routes } from "react-router-dom";
import AppLayout from "./views/layout/AppLayout.jsx";
import Shop from "./pages/Shop.jsx";
import { lazy, Suspense } from "react";


const Basket = lazy(() => import("./pages/Basket.jsx"));
const ShopItem = lazy(() => import("./pages/ShopItem.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));


function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Shop />} />
        <Route path=":id" element={<Suspense> <ShopItem /> </Suspense>} />
        <Route path="basket" element={<Suspense> <Basket /> </Suspense>} />
        <Route path="" element={<Suspense> <NotFound /> </Suspense>} />
      </Route>
    </Routes>
  )
}

export default App
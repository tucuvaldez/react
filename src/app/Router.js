import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../components/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import { Layout } from "./Layout";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<ItemListContainer />} />
                    <Route path='/detalles/:detalleId' element={<ItemDetailContainer />} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    <Route path='/cart/' element={<Cart />} />
                    <Route path='*' element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
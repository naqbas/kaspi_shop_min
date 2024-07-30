import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../app/slices/basketSlice";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";

const BasketBlock = lazy(() => import("../views/BasketBlock"));



function Basket() {
    const basketTotalQuantity = useSelector(state => state.basket.basketTotalQuantity);
    const basketTotalAmount = useSelector(state => state.basket.basketTotalAmount);
    const dispatch = useDispatch()

    const handleClearBasket = () => {
        dispatch(clearBasket());
    }



    return (
        <section className="p-8 absolute top-20 w-full text-lg">
            <nav className="flex justify-between p-4 border-b border-[#999]">
                <h2 className="font-bold">Корзина</h2>
                <button onClick={() => handleClearBasket()} className="text-[#999]">Очистить корзину</button>
            </nav>

            <Suspense>
                <BasketBlock />
            </Suspense>

            <div className="flex justify-between p-4">
                <p>Количество товаров: <span className="text-[#000]">{basketTotalQuantity}</span></p>
                <p>Сумма заказов: <span className="text-[#000]">{basketTotalAmount} ₸</span></p>
            </div>
            <div className="flex justify-between p-4">
                <Link to="/"><button className="px-8 py-4 font-bold text-[#999] border border-[#999] rounded-3xl hover:bg-[#999] hover:text-[#fff]">{"<"} Вернуться назад</button></Link>
                <button className="px-8 py-4 font-bold border border-current rounded-3xl hover:bg-[#0089d0] hover:text-[#fff] ml-3">Оплатить сейчас</button>
            </div>
        </section>
    );
}

export default Basket
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeBasketItem } from "../app/slices/basketSlice";


function BasketBlock() {
    const basket = useSelector(state => state.basket.basket);
    const dispatch = useDispatch()

    const handleIncreaseItemQuantity = (product) => {
        dispatch(increaseItemQuantity(product))
    }

    const handleDecreaseItemQuantity = (product) => {
        dispatch(decreaseItemQuantity(product));
    }

    const handleRemoveBasketItem = (product) => {
        dispatch(removeBasketItem(product));
    }



    return (
        <div>
            {
                basket.map((p, index) => (
                    <div key={index} className="flex justify-between items-center h-[150px] p-4 gap-2 border-b border-[#999]">
                        <div className="w-[100px] h-auto p-2"><img src={p.image} alt={p.title} /></div>
                        <div className="flex flex-col w-[70%] md:flex-row md:items-center md:justify-between">
                            <h3 className="text-lg font-medium mb-4 md:w-[50%] md:mb-0">{p.title}</h3>
                            <div className="flex justify-between items-center md:w-[40%]">
                                <div className="flex">
                                    <button onClick={() => handleDecreaseItemQuantity(p)} className="px-2 rounded-full border border-current hover:bg-[#0089d0] hover:text-[#fff]">-</button>
                                    <p className="text-[#000] text-2xl p-1 mr-1 ml-1 md:text-xl">{p.quantity}</p>
                                    <button onClick={() => handleIncreaseItemQuantity(p)} className="px-[6px] rounded-full  border border-current hover:bg-[#0089d0] hover:text-[#fff]">+</button>
                                </div>
                                <p className="text-[#000] text-2xl md:text-xl">{(p.price).toFixed() * 100 * p.quantity} ₸</p>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveBasketItem(p)} className="text-[#999]">Удалить</button>
                    </div>
                ))
            }
        </div>
    );
}

export default BasketBlock
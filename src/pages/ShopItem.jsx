import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../app/api/products";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { addBasketItem } from "../app/slices/basketSlice";
import loading from "../assets/loading.gif";


function ShopItem() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data, isError, isLoading } = useGetProductByIdQuery(id);

    if (isError) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <h1 className="text-red-500 font-bold">Произошла непредвиденная ошибка. Повторите попытку позже</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <img src={loading} alt="Загрузка" />
            </div>
        );
    }


    const handleAddBasketItem = (product) => {
        dispatch(addBasketItem(product));
    }


    return (
        <section className="p-8 absolute top-20 w-full flex justify-center items-center">
            {
                (data !== null) ?

                    <div className="flex flex-col p-8 md:flex-row">
                        <div className="p-8"><img src={data.image} alt={data.title} /></div>
                        <div className="flex flex-col justify-between p-8">
                            <h3 className="text-xl font-medium mb-4">{data.title}</h3>
                            <p className="mb-4">{data.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[#999]">Цена:</p>
                                <p className="text-[#000] text-2xl">{(data.price).toFixed() * 100} ₸</p>
                            </div>
                            <button onClick={() => handleAddBasketItem(data)} className="px-5 py-2 font-medium border mx-auto border-current rounded-3xl hover:bg-[#0089d0] hover:text-[#fff] w-[50%]">+ Добавить</button>
                        </div>
                    </div>
                    :
                    <NotFound />
            }
        </section>
    );
}

export default ShopItem
import { useGetAllProductsQuery } from "../app/api/products.js";
import { useSelector } from "react-redux";
import CardItem from "./CardItem.jsx";
import loading from "../assets/loading.gif";



function CardBlock() {
    const { data, isError, isLoading } = useGetAllProductsQuery();


    const category = useSelector(state => state.basket.category);
    const sorting = useSelector(state => state.basket.sorting);


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


    const dataCategory = data.filter(p => p.category === category);
    const ascData = [...data];
    const descData = [...data];
    ascData.sort((a, b) => a.price - b.price);
    descData.sort((a, b) => b.price - a.price);

    const ascDataCategory = [...dataCategory];
    const descDataCategory = [...dataCategory];
    ascDataCategory.sort((a, b) => a.price - b.price);
    descDataCategory.sort((a, b) => b.price - a.price);

    return (
        <div className="flex flex-wrap justify-evenly gap-y-4 w-full p-8 shopBlock">
            {
                category === "all" ?
                    sorting === "asc" ?
                        ascData.map((p) => (
                            <CardItem product={p} key={p.id} />
                        ))
                        :
                        descData.map((p) => (
                            <CardItem product={p} key={p.id} />
                        ))

                    :

                    sorting === "asc" ?
                        ascDataCategory.map((p) => (
                            <CardItem product={p} key={p.id} />
                        ))
                        :
                        descDataCategory.map((p) => (
                            <CardItem product={p} key={p.id} />
                        ))
            }
        </div >
    );
}

export default CardBlock
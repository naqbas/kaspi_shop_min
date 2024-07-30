import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBasketItem } from "../app/slices/basketSlice";


function CardItem(props) {
    const p = props.product;

    const dispatch = useDispatch();


    const handleAddBasketItem = (product) => {
        dispatch(addBasketItem(product));
    }

    return (
        <div className="flex flex-col justify-between items-center w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-[#999]">
            <div className="flex justify-center items-center p-4 w-[90%] h-[200px] xs:h-[250px] sm:h-[400px] xl:h-[500px]  border-b border-[#999] mb-2">
                <img className="w-full h-auto" src={p.image} alt={p.title} />
            </div>
            <h3 className="mb-2 h-[120px] w-[90%] font-bold"><Link to={`/${p.id}`}>{p.title}</Link></h3>
            <div className="flex justify-between items-center mb-2 w-[90%]">
                <p className="text-[#999]">Цена:</p>
                <p className="text-[#000] text-2xl">{(p.price).toFixed() * 100} ₸</p>
            </div>
            <button onClick={() => handleAddBasketItem(p)} className="px-5 py-2 font-medium border border-current rounded-3xl hover:bg-[#0089d0] hover:text-[#fff] w-[90%]">+ Добавить</button>
        </div>
    );
}

export default CardItem
import { useDispatch } from "react-redux";
import { changeSorting } from "../app/slices/basketSlice.js";



function Sorting() {

    const dispatch = useDispatch();


    const handleSorting = (event) => {
        dispatch(changeSorting(event.target.value));
    }

    return (
        <div className="flex justify-end font-bold lg:flex-col">
            <p>сортировка по</p>
            <select onChange={(event) => handleSorting(event)} className="border border-[#999]">
                <option value="asc">возрастанию цены</option>
                <option value="desc">убыванию цены</option>
            </select>
        </div>
    );
}

export default Sorting
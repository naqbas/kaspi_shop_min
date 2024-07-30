import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../app/slices/basketSlice.js";



function Category() {

    const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

    const category = useSelector(state => state.basket.category);
    const dispatch = useDispatch();

    const handleCategory = (event, c) => {

        dispatch(changeCategory(c));

        if (event.target.getAttribute("aria-selected") === "false") {
            event.target.setAttribute("aria-selected", "true");
        } else {
            return null;
        }

        for (const child of event.target.closest(".navCategory").children) {
            if (child.getAttribute("aria-selected") === "true" && child === event.target) {
                child.classList.add("active");
            } else {
                child.classList.remove("active");
                child.setAttribute("aria-selected", "false");
            }
        }
    }

    return (
        <div className="flex justify-between navCategory mb-2">
            {
                categories.map((c, index) => (
                    category === c ?
                        <button key={index} onClick={(event) => handleCategory(event, c)} className="p-2 font-bold border border-[#999] active" aria-selected="false">{c}</button>
                        :
                        <button key={index} onClick={(event) => handleCategory(event, c)} className="p-2 font-bold border border-[#999]" aria-selected="false">{c}</button>
                ))
            }
        </div>
    );
}

export default Category
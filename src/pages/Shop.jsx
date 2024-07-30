import CardBlock from "../views/CardBlock.jsx";
import Category from "../views/Category.jsx";
import Sorting from "../views/Sorting.jsx";


function Shop() {

    return (
        <section className="absolute top-20 w-full">
            <nav className="flex flex-col m-8 lg:flex-row lg:justify-between">
                <Category />

                <Sorting />
            </nav>
            <CardBlock />
        </section >
    );
}

export default Shop
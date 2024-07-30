import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";


function AppLayout() {
    const basketTotalQuantity = useSelector(state => state.basket.basketTotalQuantity);

    const location = useLocation();


    return (
        <>
            <header className=" fixed top-0 z-10 bg-white w-full flex items-center justify-between p-4">
                <div>
                    <Link to="/"><img src={logo} alt="Логотип" /></Link>
                </div>
                <nav className="flex items-center justify-between w-[60%] text-2xl font-bold ml-4">
                    <Link to="/" id="shop" className={location.pathname === "/" ? "activeHeader" : ""}>Магазин</Link>
                    <Link to="/basket" id="basket" className={location.pathname === "/basket" ? "activeHeader" : ""}>Корзина {basketTotalQuantity}</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default AppLayout
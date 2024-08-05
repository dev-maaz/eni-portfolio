
import { Link } from "react-router-dom";
function Drawer() {
    return ( 
        <Link to="/projects" className="flex flex-col h-28 w-full absolute bg-red-200 bottom-0 rounded-b-lg group hover:h-36 transition-all items-center justify-start ">
            <div className="material-symbols-outlined font-bold flex group-hover:text-transparent transition-all"> keyboard_arrow_up </div>
            <div className="flex font-poppins group-hover:-translate-y-2 transition-all"> Projects </div>
        </Link>
     );
}

export default Drawer;

import { Link } from "react-router-dom";
import Drawer from "../components/Drawer";
import ContactBar from "../components/ContactBar";

function Home() {
    return ( 
        <div className="flex flex-col w-big h-128 bg-red-100 rounded-lg relative">
            <div className="flex font-bold text-xl font-poppins p-12">
                <div className="flex"> Hi, my name is </div>
                <div className="flex text-red-600 ml-1.5"> Umair Irfan </div>
            </div>
            <div className="flex pl-12 text-md font-poppins"> I love finding unorthodox solutions to orthodox problems. </div>
            <div name='filler' className="flex h-44"></div>
            <img src="/headshot.png" alt="headshot" className="absolute top-0 right-0" />
            <ContactBar />
            <Drawer />
        </div>
     );
}

export default Home;
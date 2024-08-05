
import HorizontalLine from "../components/HorizontalLine";
import Node from "../components/Node";

function Projects() {
    return ( 
        <div className="flex flex-col gap-60">
            <div className="flex w-big justify-around">
                <Node />               
                <HorizontalLine />
                <Node /> 
            </div>

            <div className="flex w-big justify-around">
                <Node /> 
                <HorizontalLine />
                <Node /> 
            </div>
        </div>
     );
}

export default Projects;
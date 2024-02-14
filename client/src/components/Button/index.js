import { Link } from "react-router-dom";

export default function Button({title,active,...props}){
    return(
        <div>
            <Link {...props} className={(active?"bg-black text-white":"bg-white text-black")+" w-[180px] h-[35px] rounded mb-5 flex items-center justify-center text-lg font-medium"}>{title}</Link>
        </div>
    )
}
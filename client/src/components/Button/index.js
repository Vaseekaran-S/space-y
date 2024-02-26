import { Link } from "react-router-dom";

export default function Button({title,active,to}){
    return(
        <div>
            <Link to={to} className={`w-[180px] h-[35px] mb-4 bg-white text-black rounded shadow hover:shadow-lg flex-center text-lg font-medium ${active && 'bg-black text-white'}`}>{title}</Link>
        </div>
    )
}
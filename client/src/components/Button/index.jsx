import { Link } from "react-router-dom";

export default function Button({title,active,to}){
    return(
        <div>
            <Link to={to} className={`w-[180px] h-[40px] mb-2 rounded hover:shadow-lg flex-center text-lg font-bold ${active ? 'bg-gray-50 text-black shadow-lg' : 'text-white hover:bg-gray-600'}`}>{title}</Link>
        </div>
    )
}

export default function Button({title,active,className,...props}){
    return(
        <div>
            <button {...props} className={`w-[180px] h-[35px] bg-white text-black rounded border shadow hover:shadow-lg flex-center text-lg font-medium ${active && 'bg-black text-white'} ${className}`}>{title}</button>
        </div>
    )
}
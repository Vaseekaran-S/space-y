
export default function Button({title,active,className,...props}){
    return(
        <>
            <button {...props} className={`w-[180px] h-[35px] rounded border shadow hover:shadow-lg flex-center text-lg font-medium ${active ? 'bg-black text-white' : 'bg-white text-black'} ${className}`}>{title}</button>
        </>
    )
}
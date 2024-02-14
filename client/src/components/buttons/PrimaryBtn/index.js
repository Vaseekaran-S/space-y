
export default function PrimaryBtn({placeholder,...props}){
    return(
        <>
            <button {...props} className="skip-styling max-w-sm w-full text-white bg-gray-900 cursor-pointer hover:bg-gray-700 rounded border p-2 font-medium">{placeholder}</button>
        </>
    )
}
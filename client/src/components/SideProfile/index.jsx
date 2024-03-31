
export default function SideProfileBar() {

    return (
        <div className="w-[300px] my-3 mx-2 z-20">
            <div className="relative flex flex-col items-center p-2 py-5 shadow-lg border rounded">
                <img src="/images/dummy/profile.jpg" alt="profile" className="w-[100px] h-[100px] rounded-[50%] border p-1" />
                <h2 className="text-lg font-bold mt-1">Vaseekaran S</h2>
            </div>
            <div className="relative flex flex-col items-center p-2 py-5 mt-4 shadow-lg border rounded">
                <h2 className="text-lg font-bold mt-1">Vaseekaran S</h2>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import PostCard from "../../components/Card";
import axios from "axios";

export default function UserInfo() {

    const [data, setData] = useState({
        profile: [],
        post: []
    })

    function getData(id) {
        axios.get(`http://localhost:3001${id}`).then((e) => {
            setData(e.data)
            console.log(data);
        })
    }

    useEffect(() => {
        getData(window.location.pathname)
    }, [])

    return (

        <div>
            <div className="w-full h-[100px] flex items-center justify-center">
                <h2 className="text-black font-medium text-2xl">{data?.profile[0]?.mail}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">

                {data?.posts?.map((e, i) => {
                    return (
                        <PostCard className="col-span-1" key={i} name={e.mail} profile={e.profileImg} image={e.image} desc={e.desc} date={e.date} />
                    )
                })}
            </div>
        </div>
    )
}
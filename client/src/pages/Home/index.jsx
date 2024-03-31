import { useEffect, useState } from "react";
import PostCard from "../../components/cards/PostCard";
import { getPosts } from "../../api/post/get"

export default function Home(){

    const [post, setPost] = useState([])

    function getData(){
        getPosts().then(data=>{
            console.log(data);
            setPost(data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div className="grid grid-cols-1 gap-5 p-5">
            <div className="col-span-1 items-center">
                <PostCard />
            </div>
            <div className="col-span-1">
                <PostCard />
            </div>
            {post?.map((e,i)=>{
                return(
                    <PostCard className="col-span-1" key={i} name={e.mail} profile={e.profileImg} image={e.image} desc={e.desc} date={e.date}/>
                )
            })}
        </div>
    )
}
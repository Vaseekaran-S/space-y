import { useEffect, useState } from "react";
import PostCard from "../../components/Card";
import axios from "axios";

export default function Home(){

    const [post, setPost] = useState([])

    function getData(){
        axios.get('http://localhost:3001/getPost').then((e)=>{
            setPost(e.data)
            console.log(post);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
  
            {post?.map((e,i)=>{
                return(
                    <PostCard className="col-span-1" key={i} name={e.mail} profile={e.profileImg} image={e.image} desc={e.desc} date={e.date}/>
                )
            })}
        </div>
    )
}
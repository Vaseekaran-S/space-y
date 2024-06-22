import PostCard from "../../components/cards/PostCard";

export default function Home(){
    return(
        <div className="grid grid-cols-1 gap-5 p-5">
            <div className="col-span-1 items-center">
                <PostCard />
            </div>
            <div className="col-span-1">
                <PostCard />
            </div>
        </div>
    )
}
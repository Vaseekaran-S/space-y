import PostCard from "../../components/Card";

export default function Home(){
    
const data = [
    {
        name: "Kumararaja",
        profileImg: "black",
        image: "https://w0.peakpx.com/wallpaper/260/774/HD-wallpaper-the-big-temple-of-tanjore-temple-india-religious-architecture-ancient-hinduism.jpg",
        date: "12.05.2023",
        desc: "The Brihadisvara Temple is a Hindu temple dedicated to Shiva in Gangaikonda Cholapuram, Jayankondam, in the South Indian state of Tamil Nadu. Completed in 1035 AD by Rajendra Chola I as a part of his new capital, this Chola dynasty era temple is similar in design, and has a similar name, as the older 11th century, Brihadeeswarar Temple about 70 kilometres (43 mi) to the southwest in Thanjavur.[2] The Gangaikonda Cholapuram Temple is smaller yet more refined than the Thanjavur Temple. Both are among the largest Shiva temples in South India and examples of Dravidian style temples."
    },
    {
        name: "Suman",
        profileImg: "red",
        image: "https://i.pinimg.com/736x/2c/cd/0e/2ccd0ea78d1c1b96e3d44dcbeb2be770.jpg",
        date: "13.04.2023",
        desc: "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church"
    },
    {
        name: "Senthamizh",
        profileImg: "green",
        image: "https://www.techniajz.com/uploads/blog_images/7a4e0a7bbf886a570f6d95e5671c5fec-0x0.jpeg",
        date: "8.04.2023",
        desc: "Coimbatore is a city in the south Indian state of Tamil Nadu. To the northwest is the centuries-old, Dravidian-style Arulmigu Subramaniyaswami Temple, Marudamalai. The colorful and intricately carved Arulmigu Patteeswarar Swamy Temple lies southeast of here. In the center, the Gass Forest Museum has a huge collection of preserved animals and tree trunks. Southeast, birds and butterflies inhabit Singanallur Lake."
    },
    {
        name: "Sudhandhiran",
        profileImg: "blue",
        image: "https://i.pinimg.com/originals/d2/18/7e/d2187e8fea3cd17a7d7d61aca3b16860.jpg",
        date: "24.03.2023",
        desc: "Tiruchirappalli (also called Tiruchi or Trichy) is an ancient city in India's southern Tamil Nadu state. The Kaveri and Kollidam rivers flow around Srirangam Island, which is known for sacred Hindu sites Sri Ranganathaswamy Temple, with intricately carved gopurams (towering gateways), and Jambukeswarar-Akilandeswari Temple, dedicated to the god Shiva. The Rock Fort Temple complex towers over the city center."
    },
]

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
            {data.map((e,i)=>{
                return(
                    <PostCard className="col-span-1" key={i} name={e.name} profile={e.profileImg} image={e.image} desc={e.desc} date={e.date}/>
                )
            })}
        </div>
    )
}
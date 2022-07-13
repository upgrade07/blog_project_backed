
import './home.css'

import Post from '../Post'
const Home = () => {
    const top = [
    {
    img: "https://images.indianexpress.com/2022/05/bloodpressureGetty_1200.jpg",
    header: "World Hypertension Day 2022",
    desc: "Hypertension is essentially high blood pressure, and those who suffer from it may not exhibit any symptoms initially as it develops over the course of many years. This lack of symptoms makes it undetectable in time to prevent it or take remedial action, experts say.",
    footer_category: "Fitness",
    footer_date: "12-02-22"
    },
    {
    img: "https://images.indianexpress.com/2022/05/bhool-bhulaiyaa-2-1200.jpg",
    header: "Bhool Bhulaiyaa 2 box office collection Day 3",
    desc: "Kartik Aaryan, Tabu and Kiara Advani-starrer horror comedy Bhool Bhulaiyaa 2 reportedly had an impressive Sunday as it collected Rs 23.51 crore. Bhool Bhulaiyaa 2 box office collection after the first weekend stands between Rs 55.96 crore, bringing some relief to the Hindi film industry that has seen back to back disappointments lately.",
    footer_category: "Bollywood",
    footer_date: "19-09-21"
    },
    {
        img: "https://images.indianexpress.com/2022/05/Terra-Luna-Bitcoin-Reserve-disappeared.jpg",
        header: "Anchor Protocol: What is it, and how did it destroy the Terra-Luna stablecoins",
        desc: "Algorithmically designed Stablecoins Luna and Terra were not always wrecked coins. In December last year, they emerged as a ‘golden investment’ where 1 Luna was worth over $116. Remember, 1 stablecoin is pegged as $1. Luna’s popularity was due to a lending program called Anchor, which promised annual percentage yields (APY) of almost 20 per cent — obscenely high",
        footer_category: "Technology",
        footer_date: "19-09-21"
    }]


    const latest = [
    {
        img: "https://images.indianexpress.com/2022/05/virat-kohli_1200_insta.jpg",
        header: "Virat Kohli",
        desc: "Virat Kohli impresses with his powerful ‘cleans day’ workout.",
        footer_category: "Fitness",
        footer_date: "19-09-21",
    },
    {
        img: "https://static.toiimg.com/thumb/91691122.cms?width=680&height=512&imgsize=211520",
        header: "5 easy and nutritious rice recipes for babies and young children",
        desc: "Bengaluru consists of the closely built old town, together with a number of modern outlying areas (former suburbs) laid out in a gridiron pattern to the north and south, with many parks and wide streets.",
        footer_category: "Food",
        footer_date: "12-02-22"
    },
    // {
    //     img: "https://images.indianexpress.com/2022/05/hina-khan-cannes-820.jpg?w=630",
    //     header: "Hina Khan brings glam to Cannes 2022",
    //     desc: "Hina Khan was not invited to the opening ceremony for the Indian delegation. Hina told Film Companion on the sidelines of the event that an ‘elitist’ attitude still exists in the industry, especially against ‘television stars’ such as herself.Hina was quoted saying,Things changed after Cannes for me, I would not deny that. She added, Things did get a bit easier when it comes to work, meeting people, how they look at you, how they greet you, and the designer stuff that we wear",
    //     footer_category: "Bollywood",
    //     footer_date: "29-12-21"
    // }
    ] 
  return (
      <>
      <h1 className='imgtxt'>Kedarnath : Divine Hill Station</h1>
    <div className='home'>
        
            <div className='lefthead'>
            <img src='https://1.bp.blogspot.com/-pEQj_pMA3WQ/YTjGo66faeI/AAAAAAAADnI/WI7VqHwnGdEt3l2pt4QcB9EBlRge1__owCLcBGAsYHQ/s709/Kedarnath-Temple-Photos.jpg'></img>
            </div>
            <div className='righthead'>
                <div>
                    <img src='https://tryengineering.org/wp-content/uploads/bigstock-Science-Technology-Technology-340435108-200x200.jpg'></img>
                </div>
                <div>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/003/211/800/small/fitness-and-healthcare-character-silhouette-illustration-free-vector.jpg'></img>
                </div>
            </div>
            
    </div>
    <div className="homemid">
            <h1 >The Latest</h1>
            <hr className='hrtag'></hr>
    </div>
    
        <div className='latest'>
        
        {latest.map((card) => (
          
          <Post
            img={card.img}
            header={card.header}
            desc = {card.desc}
            footer_category={card.footer_category}
            footer_date={card.footer_date}
          ></Post>
          
        ))}
        
        
        </div>
    <div className="homemid">
            <h1 >Latest Articles</h1>
            <hr className='hrtag'></hr>
    </div>

    <div className="tourism">
      <div className="leftcontent">
        
        {top.map((card) => (
          <Post
            img={card.img}
            header={card.header}
            desc={card.desc}
            footer_category={card.footer_category}
            footer_date={card.footer_date}
          ></Post>
        ))}
      </div>
      <div className="rightcontent">
      <h2>Top Post</h2>
      <hr className="hrtag"></hr>
      {top.map((card) => (
          
          <Post
            img={card.img}
            header={card.header}
            footer_category={card.footer_category}
            footer_date={card.footer_date}
          ></Post>
          
        ))}
        <div className="advert">
            Advertisement Space
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
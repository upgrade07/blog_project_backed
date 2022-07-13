import './fitness.css'
import Post from "../Post";
const Fitness = () => {
  const [fitnessdata,setData] = useState([])
  useEffect(()=>{
    const url = 'http://localhost:3001/api/category/fitness';
    fetch(url).then((res)=>res.json())
    .then(res=>setData(res))
  },[])
  return (
    <div className="tourism">
      <div className="leftcontent">
        <h1 className="heading">Fitness</h1>
        {fitnessdata.map((card) => (
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
      {fitnessdata.map((card) => (
          
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
  );
};

export default Fitness
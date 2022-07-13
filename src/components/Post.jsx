import "./common.css"

const Post = ({img,header,desc,footer_category,footer_date}) => {
  return (
    <div className='post'>
        <div className="leftside">
          <a href="/"><img src={img}></img></a>
        </div>
        <div className="rightside">

            <div className="header">{header}</div>
            <div className="desc">{desc}</div>
            <div className="footer">
                <span className="category">{footer_category}</span><span className="date">/{footer_date}</span>
            </div>
        </div>
    </div>
  )
}

export default Post
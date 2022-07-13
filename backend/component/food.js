const food = (req,res) =>{
    res.send([
        {
          img: "https://media.istockphoto.com/photos/sliced-alphonso-mangoes-picture-id1152750103?k=20&m=1152750103&s=612x612&w=0&h=l1fNYqkfnNnUlH_CMKjUUzQqGRvQ_wKoa6oz_ucgZ2Q=",
          header: "Can mango be eaten on a weight loss diet?",
          desc: "Mango is the most popular fruit eaten during summers and probably the crowd favourite as well. But sadly, there are a number of misconceptions about this fruit that often circles around us. If you are on a weight loss diet, you might have heard someone tell you not to eat mango, as it is too sweet and packed with calories.",
          footer_category: "Food",
          footer_date: "19-09-21",
        },
        {
          img: "https://static.toiimg.com/thumb/91690648.cms?width=680&height=512&imgsize=31786",
          header: "Don’t throw almond peel, here are some genius ways to reuse them",
          desc: "Soaking and eating almonds after removing the peel has been an age-old ritual in most Indian households. But what if we tell you that discarding almond peel is a bad idea! Yes, this may sound like a bluff, but much like almonds the peels of this healthy nut contain vitamins, minerals and antioxidants that are great for health, skin and hair. Here are some genius hacks to reuse almond peels in some interesting ways. ",
          footer_category: "Food",
          footer_date: "21-12-21",
        },
        {
          img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
          header: "Here's why Espresso Coffee is worst for people with high cholesterol: Study",
          desc: "As per a recent study published in the journal BMJ Open Heart, drinking heavily espresso coffee can result in higher cholesterol and particularly among men. There have been several studies in the past on coffee that have naturally occurring chemicals with higher levels of cholesterol in the blood, which further causes heart problems including a stroke.",
          footer_category: "Food",
          footer_date: "29-12-21",
        },
        {
            img: "https://static.toiimg.com/thumb/91721269.cms?width=680&height=512&imgsize=81762",
            header: "5 parameters that affect the quality of teas",
            desc: "Tea is an emotion for many as it is always there in the thick & thin of a person's life! Be it happiness or sadness, a cup of tea will always be there to comfort your soul. If you are a tea lover just like us, it is the quality of a tea that attracts you to it and these qualities are determined based on several factors.",
            footer_category: "Food",
            footer_date: "19-01-22",
        },
        {
            img: "https://static.toiimg.com/thumb/91691122.cms?width=680&height=512&imgsize=211520",
            header: "5 easy and nutritious rice recipes for babies and young children",
            desc: "Bengaluru consists of the closely built old town, together with a number of modern outlying areas (former suburbs) laid out in a gridiron pattern to the north and south, with many parks and wide streets.",
            footer_category: "Food",
            footer_date: "12-02-22",
        }
      ])
}

module.exports.foodDetails = food
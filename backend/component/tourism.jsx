const tourism = (req,res) =>{
    res.send([
        {
          img: "https://1.bp.blogspot.com/-pEQj_pMA3WQ/YTjGo66faeI/AAAAAAAADnI/WI7VqHwnGdEt3l2pt4QcB9EBlRge1__owCLcBGAsYHQ/s709/Kedarnath-Temple-Photos.jpg",
          header: "Kedarnath : Divine Hill Station",
          desc: "Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. It is a Nagar panchayat in the Rudraprayag district.",
          footer_category: "Travel",
          footer_date: "19-09-21",
        },
        {
          img: "https://digitalnomads.world/wp-content/uploads/2021/02/goa-1024x683.jpg",
          header: "Goa : Party Capital of India",
          desc: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem.",
          footer_category: "Travel",
          footer_date: "21-12-21",
        },
        {
          img: "https://www.tourmyindia.com/states/kerala/image/escape-to-kerala3.webp",
          header: "Kerala : Escape Town",
          desc: "The paradisaical Kerala offers exotic flavours of travel. There is hardly a traveller who would refuse a chance to wander in this land of surreal beauty and rich culture. Our 8 Days/ 7 Nights desires to provide an exclusive Kerala tour that lets you have the real taste of its few flavour some destinations along with brief tour of the pride of neighbouring state of Tamil Nadu, Kanyakumari.",
          footer_category: "Travel",
          footer_date: "29-12-21",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/RASHTRAPATI_BHAVAN.jpg/450px-RASHTRAPATI_BHAVAN.jpg",
            header: "New Delhi : Explore the Capital",
            desc: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi. New Delhi is the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India.",
            footer_category: "Travel",
            footer_date: "19-01-22",
        },
        {
            img: "https://cdn.britannica.com/91/189791-050-4CE6663A/Bangalore-Palace-Bengaluru-India.jpg",
            header: "Bengaluru : The contemporary city",
            desc: "Bengaluru consists of the closely built old town, together with a number of modern outlying areas (former suburbs) laid out in a gridiron pattern to the north and south, with many parks and wide streets.",
            footer_category: "Travel",
            footer_date: "12-02-22",
        }
      ])
}

module.exports.tourismDetails = tourism
const fitness = (req, res) => {
  res.send([
    {
      img:
        "https://images.indianexpress.com/2022/05/virat-kohli_1200_insta.jpg",
      header: "Virat Kohli",
      desc: "Virat Kohli impresses with his powerful ‘cleans day’ workout.",
      footer_category: "Fitness",
      footer_date: "19-09-21",
    },
    {
      img: "https://images.indianexpress.com/2022/01/PZ-feature.jpg",
      header: "Preity Zinta",
      desc: "Squats at the gym, serves major fitness goals.",
      footer_category: "Fitness",
      footer_date: "21-12-21",
    },
    {
      img: "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
      header: "Should yoga be done on an empty stomach?",
      desc:
        "Yoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise.",
      footer_category: "Fitness",
      footer_date: "29-12-21",
    },
    {
      img:
        "https://images.indianexpress.com/2022/05/suhana-khan_1200_insta.jpg",
      header: "Suhana Khan",
      desc:
        "The champ she is shows on the mat! yoga trainer Rupal Sidhpura Faria said in an Instagram post",
      footer_category: "Fitness",
      footer_date: "19-01-22",
    },
    {
      img:
        "https://images.indianexpress.com/2022/05/bloodpressureGetty_1200.jpg",
      header: "World Hypertension Day 2022",
      desc:
        "Hypertension is essentially high blood pressure, and those who suffer from it may not exhibit any symptoms initially as it develops over the course of many years. This lack of symptoms makes it undetectable in time to prevent it or take remedial action, experts say.",
      footer_category: "Fitness",
      footer_date: "12-02-22",
    },
  ]);
};
module.exports.fitnessDetails = fitness;
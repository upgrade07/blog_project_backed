const technology =(req,res)=>{
    res.send([
        {
          img: "https://images.indianexpress.com/2022/05/Terra-Luna-Bitcoin-Reserve-disappeared.jpg",
          header: "Anchor Protocol: What is it, and how did it destroy the Terra-Luna stablecoins",
          desc: "Algorithmically designed Stablecoins Luna and Terra were not always wrecked coins. In December last year, they emerged as a ‘golden investment’ where 1 Luna was worth over $116. Remember, 1 stablecoin is pegged as $1. Luna’s popularity was due to a lending program called Anchor, which promised annual percentage yields (APY) of almost 20 per cent — obscenely high",
          footer_category: "Technology",
          footer_date: "19-09-21",
        },
        {
          img: "https://images.indianexpress.com/2022/05/Xiaomi_LOGO_Reuters.jpg",
          header: "Xiaomi to partner with Leica Camera, new flagship phone will launch in July",
          desc: "Xiaomi has announced a partnership with Leica Camera, the renowned German camera brand. In a press statement, Xiaomi said that “the first imaging flagship smartphone jointly developed by the two companies will be officially launched in July this year.”",
          footer_category: "Technology",
          footer_date: "21-12-21",
        },
        {
          img: "https://images.indianexpress.com/2022/05/Google-threat-analysis-group-spyware-state-sponsored.jpg",
          header: "Google’s Threat Analysis Group",
          desc: "Google’s Threat Analysis Group (TAG) has discovered three zero-day malware government-backed campaigns that used the Predator spyware suite developed by commercial surveillance firm Cytrox. The hacking group took advantage of five previously unknown Android vulnerabilities and some vulnerabilities that were known but not patched by the victims.",
          footer_category: "Technology",
          footer_date: "29-12-21",
        },
        {
            img: "https://images.indianexpress.com/2022/05/NASA-Hubble-Telescope.jpg",
            header: "NASA: Hubble Telescope",
            desc: "One of the most powerful tools the world knows when it comes to measuring the interstellar is the Hubble Space Telescope. Hubble is currently working on a much more large-scale mission – determining how quickly our universe is expanding. Now, new findings suggest that the universe is not expanding at a uniform rate.",
            footer_category: "Technology",
            footer_date: "19-01-22",
        },
        {
            img: "	https://images.indianexpress.com/2022/01/OnePlus9RT_Gallery2.jpg?w=630",
            header: "First look: OnePlus 9RT with triple camera, 120 Hz display",
            desc: "OnePlus 9RT is the latest phone from the brand. The device will go on sale from January 17 on Amazon India for a starting price of Rs 42,999. Here's a closer look at the phone.OnePlus 9RT has a 6.62-inch full HD+ display with 120 Hz refresh rate.",
            footer_category: "Technology",
            footer_date: "12-02-22",
        }
      ])
}

module.exports.technologyDetails = technology
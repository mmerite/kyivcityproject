export default function handler(req,res) {
    const sketches =[
        {
            id: "Podil",
            title: "Kontraktova square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/podil.jpeg"
        },
        {
            id: "Mogylianka",
            title: "Kyiv-Mohyla Academy",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/mogylianka.jpeg"
        },
        {
            id: "NebesnaSotnia",
            title: "Nebesna Sotnia square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/apricot.jpeg"
        },
        {
            id: "HouseofBaron",
            title: "House of Baron",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/yarval.jpeg"
        },
        {
            id: "Andriivka",
            title: "Andriivska church",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/andriivska.jpeg"
        },
        {
            id: "Gossips in May",
            title: "Gossips in May",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/fountain.jpeg"
        },
        {
            id: "SaintSofia",
            title: "The Belltower of St Sofia Cathedral",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/sofia.jpeg"
        },
        {
            id: "Cafe",
            title: "A cafe on St Sofia Cathedral square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/cafe.jpeg"
        },
    ];

    res.json(sketches);
}
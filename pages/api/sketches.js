import sql from "@/utils/postgres";

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
            img_url:"/assets/apricot.jpeg"
        },
        {
            id: "HouseofBaron",
            title: "House of Baron",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            img_url:"/assets/yarval.jpeg"
        },
        {
            id: "Andriivka",
            title: "Andriivska church",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            img_url:"/assets/andriivska.jpeg"
        },
        {
            id: "Gossips in May",
            title: "Gossips in May",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            img_url:"/assets/fountain.jpeg"
        },
        {
            id: "SaintSofia",
            title: "The Belltower of St Sofia Cathedral",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            img_url:"/assets/sofia.jpeg"
        },
        {
            id: "Cafe",
            title: "A cafe on St Sofia Cathedral square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            img_url:"/assets/cafe.jpeg"
        },
    ];

    res.json(sketches);
}
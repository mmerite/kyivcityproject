export default function handler(req,res) {
    const sketches =[
        {
            id: "Podil",
            title: "Kontraktova square of Podil",
            year: "2016",
            size: "29 x 21 cm",
            imgUrl:""
        },
        {
            id: "Mogylianka",
            title: "Kyiv-Mohyla Academy",
            year: "2016",
            size: "21 x 29 cm",
            imgUrl:""
        },
        {
            id: "NebesnaSotnia",
            title: "Nebesna Sotnia square",
            year: "2016",
            size: "29 x 21 cm",
            imgUrl:""
        },
        {
            id: "HouseofBaron",
            title: "House of Baron",
            year: "2016",
            size: "21 x 29 cm",
            imgUrl:""
        },
        {
            id: "Andriivka",
            title: "Andriivska church",
            year: "2016",
            size: "29 x 21 cm",
            imgUrl:""
        },
        {
            id: "Gossips in May",
            title: "Gossips in May",
            year: "2016",
            size: "21 x 29 cm",
            imgUrl:""
        },
        {
            id: "SaintSofia",
            title: "The Belltower of St Sofia Cathedral",
            year: "2016",
            size: "29 x 21 cm",
            imgUrl:""
        },
        {
            id: "Cafe",
            title: "A cafe on the St Sofia Cathedral square",
            year: "2016",
            size: "29 x 21 cm",
            imgUrl:""
        },
    ];

    res.json(sketches);
}
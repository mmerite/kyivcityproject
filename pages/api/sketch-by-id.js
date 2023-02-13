export default function handler(req,res) {
    const { id } = req.query; // this is backend endpoint so no router
    
    const sketches =[
        {
            id: "Podil",
            title: "Kontraktova square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/podil.jpeg",
            description:"hjhkjhk jkklj"
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
            imgUrl:"/assets/andriivska.jpeg",
            description: "ghjgjhgjbnbm hjhkjhkjhk"
        },
        {
            id: "Gossips in May",
            title: "Gossips in May",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/fountain.jpeg",
            description: "ghjjkhkjhdddd iiiiii"
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
//array.prototype.find() - to serach for the particular matching Id 
    const foundSketch = sketches.find((sketch) => {
        if (sketch.id === id) {
            return true;
        }
        else {
            return false;
        }
    });

    res.json( {sketch: foundSketch});
}
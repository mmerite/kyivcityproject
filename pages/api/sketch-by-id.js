export default function handler(req,res) {
    const { id } = req.query; // this is backend endpoint so no router
    
    const sketches =[
        {
            id: "1",
            title: "Kontraktova square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/podil.jpeg",
            description:"hjhkjhk jkklj"
        },
        {
            id: "2",
            title: "Kyiv-Mohyla Academy",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/mogylianka.jpeg"
        },
        {
            id: "3",
            title: "Nebesna Sotnia square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/apricot.jpeg"
        },
        {
            id: "4",
            title: "House of Baron",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/yarval.jpeg"
        },
        {
            id: "5",
            title: "Andriivska church",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/andriivska.jpeg",
            description: "ghjgjhgjbnbm hjhkjhkjhk"
        },
        {
            id: "6",
            title: "Gossips in May",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/fountain.jpeg",
            description: "ghjjkhkjhdddd iiiiii"
        },
        {
            id: "7",
            title: "The Belltower of St Sofia Cathedral",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/sofia.jpeg"
        },
        {
            id: "8",
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
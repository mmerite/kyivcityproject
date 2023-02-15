import sql from "@/utils/postgres";

export default async function handler(req,res) {
    const id = req.query.id; // this is backend endpoint so no router. we take here id from a query parameter
    
    const sketches = await sql`
    select * from sketches
    where id = ${id}` // using interpolation because of backticks

    //below is sanity check
    if (sketches.length <1 ) {
        res.status(404).json({ message: "Sketch not found"});
        return;
    }

    const foundSketch = sketches[0]; // to get a first sketch in that array

    res.json( {sketch: foundSketch});
}



/*    const sketches =[
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
    ]; */
/* array.prototype.find() - to serach for the particular matching Id 
    const foundSketch = sketches.find((sketch) => {
        if (sketch.id === id) {
            return true;
        }
        else {
            return false;
        }
    }); */


import sql from "@/utils/postgres";

export default async function handler(req,res) {

        const sketches = await sql`
            SELECT * from sketches
        `;
// sql command always returns an array
// use backticks

   /* const sketches =[
        {
            id: "1",
            title: "Kontraktova square",
            medium: "Watercolour and ink",
            size: "29 x 21 cm",
            imgUrl:"/assets/podil.jpeg"
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
            imgUrl:"/assets/andriivska.jpeg"
        },
        {
            id: "6",
            title: "Gossips in May",
            medium: "Watercolour and ink",
            size: "21 x 29 cm",
            imgUrl:"/assets/fountain.jpeg"
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

    res.json(sketches);
}
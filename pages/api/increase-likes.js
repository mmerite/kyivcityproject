import sql from "@/utils/postgres";

export default async function handler(req,res) {
    const id = +req.query.id;
    const likes = +req.query.likes // + is to turn strings into intergers

    if (id===null || id===undefined) {
        res.status(400).json({message:"Skecth id is required"});
        return;
    }

    if (likes===null || likes===undefined) {
        res.status(400).json({message:"Likes are required"});
        return;
    }

    const sketches = await sql `
    update sketches
    set likes = ${likes}
    where id = ${id}
    `;
   /* const sketches2 = await sql`
    select * from sketches
    order by id
    `; */

    res.json({message: "Number of likes updated"})
}
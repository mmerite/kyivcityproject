import Link from "next/link";
import { useState } from "react";

export default function SketchItem({sketch}) {
    const [likes, setLikes] = useState(+sketch.likes);

    // in handleLike function we need to connect to an api endpoint increase-likes
    const handleLike = async () => {
        let newLikes = likes + 1;
        setLikes(newLikes);

        const id = +sketch.id;
        const response = await fetch(`/api/increase-likes?id=${id}&likes=${newLikes}`)
        const data = await response.json();
        
        
    }

    return (
        <div className="border rounded-lg p-4">
            
            <Link href={`/single-sketch/${sketch.id}`} className="text-md font-medium">
               <span><img src={sketch.img_url} className="rounded"></img> {sketch.title} </span>
               </Link>
            <p className="font-light text-sm text-gray-700">{sketch.medium}</p>
            <p className="font-light italic text-sm text-gray-700">{sketch.size}</p>
            
            <button 
            className="rounded text-sm px-2 py-1 my-4 bg-indigo-400 text-white"
            type="button"
            onClick={handleLike}>
                Love ({likes})
            </button>
        </div>
    );
}

//<Link> loads pages a little faster than usual a href
// in this case it replaces unclickable paragraphe <p className="text-md font-medium">{sketch.title}</p>
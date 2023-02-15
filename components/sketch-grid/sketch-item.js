import Link from "next/link";
import { useState } from "react";

export default function SketchItem({sketch}) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    return (
        <div className="border rounded-lg p-4">
            <img src={sketch.img_url} className="rounded"></img>
            <Link href={`/single-sketch/${sketch.id}`} className="text-md font-medium">
                {sketch.title}</Link>
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
import Link from "next/link";
import { useState } from "react";
import Button from "../shared/Buttons/button";

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
        <div className="border rounded-lg px-4 py-2 hover:px-6">
            <div className="h-5/6 h-96 rounded">
                <Link href={`/single-sketch/${sketch.id}`} className="text-md font-medium">
                    <span><img src={sketch.img_url} className="h-4/6 object-contain rounded mb-4"></img> {sketch.title} </span>
                </Link>
                <p className="font-light text-sm text-gray-700">{sketch.medium}</p>
                <p className="font-light italic text-sm text-gray-700">{sketch.size}</p>
            </div>
            
            <div className="flex flex-row justify-between"> 
                <button 
                    className="rounded text-sm px-2 py-1 mb-2 flex flex-row text-gray-700 hover:bg-indigo-500 hover:text-white"
                    type="button"
                    onClick={handleLike}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                        ({likes})
                </button>

                <button 
                    className="rounded text-sm px-2 py-1 mb-2 flex flex-row text-orange-400 hover:bg-orange-400 hover:text-white"
                    type="button">
                    <a href ="https://rb.gy/abu91n" target="_blank" className="w-full">Buy on Etsy </a>   
                </button>

            </div>
        </div>
    );
}

//<Link> loads pages a little faster than usual a href
// in this case it replaces unclickable paragraphe <p className="text-md font-medium">{sketch.title}</p>
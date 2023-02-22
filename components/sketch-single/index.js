export default function SketchSingle({imgUrl, title, medium, size, description}) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8">
            <div className="w-full flex flex-cols-2 space-x-24 py-4">
            
                <div className="w-7/12 py-4">
                    <img src={imgUrl} className="object-contain aspect-[4/4] rounded-lg"></img>
                </div>

                <div className="w-5/12 py-4 mt-40">
                    <h2 className="font-bold py-2"> "{title}"</h2>
                    <p className="text-light text-gray-500 py-2">Medium: {medium}</p>
                    <p className="text-light text-gray-500 py-2"> Size: {size}</p>
                    <p className="text-light text-gray-500 py-2">Story about: {description}</p>
                    
                </div>


            </div>
        </div>
    );
}
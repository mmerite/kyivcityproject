export default function SketchSingle({imgUrl, medium, size, description}) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8">
            <div className="w-full flex flex-row-2 space-x-24 py-4">
            
                <div className="w-6/12">
                    <img src={imgUrl} className="rounded-lg"></img>
                </div>

                <div className="w-6/12">
                    <p className="text-light text-gray-500">Medium: {medium}</p>
                    <p className="text-light text-gray-500"> Size: {size}</p>
                    <p className="text-light text-gray-500">Story about: {description}</p>
                    
                </div>


            </div>
        </div>
    );
}
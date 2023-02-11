export default function SketchItem({sketch}) {
    return (
        <div className="border rounded-lg p-4">
            <img src={sketch.imgUrl}className=""></img>
            <p className="text-md font-Georgia font-medium">{sketch.title}</p>
            <p className="font-light text-sm text-gray-700">{sketch.medium}</p>
            <p className="font-light italic text-sm text-gray-700">{sketch.size}</p>

        </div>
    );
}
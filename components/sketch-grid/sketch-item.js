export default function SketchItem({sketch}) {
    return (
        <div className="border rounded-lg p-4">
            <p className="text-xl font-Georgia font-medium">{sketch.name}</p>
            <p className="text-gray-700">{sketch.year}</p>

        </div>
    );
}
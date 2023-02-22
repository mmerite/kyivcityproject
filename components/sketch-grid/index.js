import SketchItem from "./sketch-item";
import { useEffect, useState } from "react";

export default function SketchGrid() {
    const [sketches, setSketches] = useState([]);

    useEffect(() => {
        getSketches();
    }, []);

    const getSketches = async () => {
        const response = await fetch(`/api/sketches`);
        const data = await response.json();
        setSketches(data);

    }

    return (
    <div className="w-full columns-4 gap-8 items-start">
        {sketches.map((sketch, index) => (
        <SketchItem key={index} sketch={sketch} />
        ))}
    </div>
    );
}
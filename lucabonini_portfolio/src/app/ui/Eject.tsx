import { useState, useEffect } from 'react'

//The eject button for the ProjBox. Resets the TVSet to the default state
export default function Eject({onShow}: { onShow: () => void }) {
    const [hovered, setHover] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
    const onPointerOver = () => setHover(true);
    const onPointerOut = () => setHover(false);

    return (
        <mesh onClick={onShow} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
            <mesh position={[9.5, 5, 2]} rotation={[Math.PI/2, 0, 0]}>
                <cylinderGeometry args={[0.75, 0.75, 1, 32]} />
                <meshStandardMaterial color="grey" />
            </mesh>
            <mesh position={[9.5, 4.9, 2]} rotation={[0, 7*Math.PI/4, 0]}>
                <tetrahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[9.5, 4.8, 2]}>
                <boxGeometry args={[0.65, 0.25, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </mesh>
    )
}
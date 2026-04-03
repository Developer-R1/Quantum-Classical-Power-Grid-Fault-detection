import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { SphereGeometry } from "three";

function QuantumSphere () {
    return (
        <mesh>
            <SphereGeometry args = {[1.5, 64, 64]}/>
            <meshStandardMaterial  
                color = "00ffff"
                wireframe
            />
        </mesh>
    );
}

export default function QuantumScene (){
    return (
        <Canvas style={{ position: "fixed", height: "100vh" }}>
        <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <Stars />
            <QuantumSphere />

            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
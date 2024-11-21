export default function Shelf() {
    return (
      <mesh>
        <mesh position={[0, -3, 2]}>
          <boxGeometry args={[45, 10, 1]} />
          <meshStandardMaterial color="brown"/>
        </mesh>
        <mesh position={[6.25, 5, 2]}>
          <boxGeometry args={[12.5, 4, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, 2.5, 2]}>
          <boxGeometry args={[25, 1, 1]} />
          <meshStandardMaterial color="grey" />
        </mesh>
        <mesh position={[-6.25, 6.17, 2]}>
          <boxGeometry args={[12.5, 1.65, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-6.25, 3.83, 2]}>
          <boxGeometry args={[12.5, 1.65, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-6.25, 5.245, 2]}>
          <boxGeometry args={[12.5, 0.20, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-6.25, 4.755, 2]}>
          <boxGeometry args={[12.5, 0.20, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-12.25, 5, 2]}>
          <boxGeometry args={[0.5, 0.29, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-0.25, 5, 2]}>
          <boxGeometry args={[0.5, 0.29, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </mesh>
    )
  }
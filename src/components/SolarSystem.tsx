import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, Text } from '@react-three/drei'
import * as THREE from 'three'

const PLANETS = [
  { name: '水星', period: 0.2408,  sma: 8,   radius: 0.8, color: '#B5B5B5' },
  { name: '金星', period: 0.6152,  sma: 14,  radius: 1.2, color: '#E8C97B' },
  { name: '地球', period: 1.0,     sma: 20,  radius: 1.3, color: '#4B9CD3' },
  { name: '火星', period: 1.8809,  sma: 30,  radius: 1.0, color: '#C1440E' },
  { name: '木星', period: 11.862,  sma: 52,  radius: 3.5, color: '#C88B3A' },
  { name: '土星', period: 29.457,  sma: 72,  radius: 3.0, color: '#E4D191' },
  { name: '天王星', period: 84.011, sma: 96,  radius: 2.2, color: '#7DE8E8' },
  { name: '海王星', period: 164.8,  sma: 118, radius: 2.1, color: '#4B70DD' },
]

const J2000_MS = new Date('2000-01-01T12:00:00Z').getTime()
const YEAR_MS = 365.25 * 24 * 3600 * 1000
// Speed: 1 real Earth year = 6 seconds of animation
const SPEED = 2 * Math.PI / 6

function getInitialAngle(period: number): number {
  const yearsElapsed = (Date.now() - J2000_MS) / YEAR_MS
  return (2 * Math.PI * (yearsElapsed % period)) / period
}

// Camera controller — sets up orthographic top-down view
function CameraController() {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 200, 0)
    camera.up.set(0, 0, -1)
    camera.lookAt(0, 0, 0)
    if (camera instanceof THREE.OrthographicCamera) {
      camera.zoom = 4
      camera.updateProjectionMatrix()
    }
  }, [camera])
  return null
}

// Flat orbit ring
function OrbitRing({ sma }: { sma: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[sma - 0.15, sma + 0.15, 128]} />
      <meshBasicMaterial color="white" transparent opacity={0.12} side={THREE.DoubleSide} />
    </mesh>
  )
}

// Pulsing Sun
function Sun() {
  const glowRef = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    glowRef.current.scale.setScalar(1.0 + 0.12 * Math.sin(clock.getElapsedTime() * 1.8))
  })
  return (
    <group>
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={0.9} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[6.5, 32, 32]} />
        <meshBasicMaterial color="#FF8C00" transparent opacity={0.15} side={THREE.BackSide} />
      </mesh>
      <pointLight color="#FFF5E0" intensity={4} distance={350} decay={1.5} />
    </group>
  )
}

// Animated planet
function Planet({
  name, period, sma, radius, color, hasSaturnRings = false,
}: {
  name: string; period: number; sma: number; radius: number; color: string; hasSaturnRings?: boolean
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const angleRef = useRef(getInitialAngle(period))
  // Real orbital speed relative to Earth (Earth = 1 orbit per 6 seconds of animation)
  const angularSpeed = SPEED / period

  useFrame((_, delta) => {
    angleRef.current += angularSpeed * delta
    groupRef.current.position.set(
      sma * Math.cos(angleRef.current),
      0,
      sma * Math.sin(angleRef.current),
    )
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 20, 20]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hasSaturnRings && (
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[radius * 1.9, radius * 0.38, 2, 64]} />
          <meshBasicMaterial color="#D4C470" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      )}
      <Text
        position={[0, 0, radius + 1.8]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        fontSize={2}
        color="rgba(255,255,255,0.65)"
        anchorX="center"
        anchorY="middle"
        renderOrder={1}
      >
        {name}
      </Text>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <Stars radius={180} depth={50} count={800} factor={3} fade speed={0} />
      <CameraController />
      <Sun />
      {PLANETS.map((p) => (
        <group key={p.name}>
          <OrbitRing sma={p.sma} />
          <Planet
            name={p.name}
            period={p.period}
            sma={p.sma}
            radius={p.radius}
            color={p.color}
            hasSaturnRings={p.name === '土星'}
          />
        </group>
      ))}
      <OrbitControls
        enableRotate={false}
        enablePan={true}
        enableZoom={true}
        minZoom={2}
        maxZoom={14}
        panSpeed={0.8}
        zoomSpeed={0.8}
      />
    </>
  )
}

export default function SolarSystem() {
  return (
    <Canvas
      orthographic
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  )
}

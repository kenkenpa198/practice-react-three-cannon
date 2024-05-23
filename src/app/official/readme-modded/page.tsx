"use client";

import { Ref } from "react";
import {
  BoxProps,
  Debug,
  Physics,
  PlaneProps,
  useBox,
  usePlane,
} from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";

// 箱のコンポーネント
function Cube(props: BoxProps) {
  // オブジェクトの接触面に適した形状を選択する。箱、平面、球など。それに質量 (mass) も与える。
  // 他に初期位置 (position) を指定している。
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));

  return (
    // メッシュ、ライン、gltf、その他何でもよいオブジェクトを取得し、参照 (ref) に結び付ける。
    // これで重力や物理世界内の他のオブジェクトの影響を受けるようになる。
    <mesh ref={ref as Ref<Mesh>}>
      {/* 箱のジオメトリ */}
      <boxGeometry />
      {/* 箱の色 */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

// 平面 (地面) コンポーネント
function Plane(props: PlaneProps) {
  // usePlane フックを使用して物理エンジン内で平面の形状を作成する。
  // 回転を指定して水平に配置している。
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref as Ref<Mesh>}>
      {/* 平面のジオメトリとサイズ */}
      <planeGeometry args={[5, 5]} />
      {/* 地面の色 */}
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

function App() {
  return (
    <div>
      <Canvas
        shadows
        camera={{ fov: 50, near: 0.1, far: 2000, position: [5, 5, -5] }}
        style={{
          width: "90vw",
          height: "80vh",
        }}
      >
        {/* 光源を追加 */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Physics には物理関連のオブジェクトを入れる */}
        <Physics>
          <Cube />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;

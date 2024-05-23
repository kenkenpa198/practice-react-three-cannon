"use client";

import { Physics, useBox } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";

function Cube(props) {
  // オブジェクトの接触面に適した形状を選択する。
  // 箱、平面、球など。それに質量 (mass) も与える。
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));

  return (
    // メッシュ、ライン、gltf、その他何でもよいオブジェクトを取得し、参照 (ref) に結び付ける。
    // これで重力や物理世界内の他のオブジェクトの影響を受けるようになる。
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
}

function App() {
  return (
    <div>
      <Canvas
        style={{
          width: "90vw",
          height: "80vh",
          background: "#f9f9f9",
        }}
      >
        {/* Physics には物理関連のオブジェクトを入れる */}
        <Physics>
          <Cube />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;

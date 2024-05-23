import Link from "next/link";

function App() {
  return (
    <div>
      <h1>Practice - React Three Cannon</h1>
      <h2>Official</h2>
      <ul>
        <li>
          <Link href="/official/readme">Official README</Link>
        </li>
      </ul>
      <h2>Reference</h2>
      <ul>
        <li>
          <a href="https://github.com/pmndrs/use-cannon/tree/master/packages/react-three-cannon#readme">
            use-cannon/packages/react-three-cannon
          </a>
        </li>
        <li>
          <a href="https://cannon.pmnd.rs/">cannon.pmnd.rs/</a>
        </li>
      </ul>
    </div>
  );
}

export default App;

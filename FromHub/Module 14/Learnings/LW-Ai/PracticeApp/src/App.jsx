// Practice switchboard — menu + routes, ALL pre-wired.
// Each practical = you type ONE file in src/demos/ (placeholder exists already).
import { Routes, Route, NavLink } from "react-router-dom";
import D01Counter from "./demos/D01-Counter";
import D02UseRefDOM from "./demos/D02-UseRefDOM";
import D03Timer from "./demos/D03-Timer";
import D04TodoMini from "./demos/D04-TodoMini";
import D05ContextTheme from "./demos/D05-ContextTheme";
import D06MemoStable from "./demos/D06-MemoStable";
import D07LayoutEffect from "./demos/D07-LayoutEffect";
import D08MyPosts from "./demos/D08-MyPosts";
import D09SearchFilter from "./demos/D09-SearchFilter";
import D10ExtraField from "./demos/D10-ExtraField";
import D12ReducerCounter from "./demos/D12-ReducerCounter";
import D13OutletLayout from "./demos/D13-OutletLayout";

const demos = [
  { path: "/d01", name: "D01 — Counter" },
  { path: "/d02", name: "D02 — useRef DOM" },
  { path: "/d03", name: "D03 — Timer" },
  { path: "/d04", name: "D04 — Mini todo" },
  { path: "/d05", name: "D05 — Context theme" },
  { path: "/d06", name: "D06 — React.memo + memo hooks" },
  { path: "/d07", name: "D07 — useLayoutEffect" },
  { path: "/d08", name: "D08 — My posts" },
  { path: "/d09", name: "D09 — Search filter" },
  { path: "/d10", name: "D10 — Extra field" },
  { path: "/d12", name: "D12 — useReducer counter" },
  { path: "/d13", name: "D13 — Nested routes / Outlet" },
];

function Home() {
  return (
    <div className="card">
      <h2>M14 Practice</h2>
      <p>
        Pick an exercise from the menu. Each demo = one file in{" "}
        <code>src/demos/</code> — type it, run it, explain it back.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="shell">
      <aside className="menu">
        <h3>Exercises</h3>
        <NavLink to="/">Home</NavLink>
        {demos.map((d) => (
          <NavLink key={d.path} to={d.path}>
            {d.name}
          </NavLink>
        ))}
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/d01" element={<D01Counter />} />
          <Route path="/d02" element={<D02UseRefDOM />} />
          <Route path="/d03" element={<D03Timer />} />
          <Route path="/d04" element={<D04TodoMini />} />
          <Route path="/d05" element={<D05ContextTheme />} />
          <Route path="/d06" element={<D06MemoStable />} />
          <Route path="/d07" element={<D07LayoutEffect />} />
          <Route path="/d08" element={<D08MyPosts />} />
          <Route path="/d09" element={<D09SearchFilter />} />
          <Route path="/d10" element={<D10ExtraField />} />
          <Route path="/d12" element={<D12ReducerCounter />} />
          <Route path="/d13" element={<D13OutletLayout />} />
        </Routes>
      </main>
    </div>
  );
}

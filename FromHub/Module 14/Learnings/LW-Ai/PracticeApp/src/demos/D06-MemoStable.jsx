// D06 — Memo demo · practices: React.memo + useCallback + useMemo + child→parent callback
// Spec: parent holds a count + one unrelated state. Pass <Child> (defined in this same file,
// wrapped in React.memo) a stable increment callback from useCallback and a memoized total
// from useMemo. Child must NOT re-render when only the unrelated state changes — prove it
// with a render counter inside Child.
// Bonus (HOC): create withFrame(C) = (props) => <div className="card">{<C {...props} />}</div>
// and wrap Child in it under React.memo — then say why the HOC alone cannot stop re-renders.
// TODO (you): type your whole component here, replacing this placeholder.
export default function D06MemoStable() {
  return <p className="card">D06 — not typed yet</p>;
}

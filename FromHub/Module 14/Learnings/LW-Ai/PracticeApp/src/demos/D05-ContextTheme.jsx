// D05 — Theme toggle via Context · practices: createContext, Provider, useContext, custom hook
// Spec: a container component holds the theme state and wraps a Consumer in
// <ThemeContext.Provider>. The Consumer must read the theme through YOUR OWN
// useTheme() custom hook (a use-prefixed function wrapping useContext — same shape
// as useAuth() in BlogApp). A toggle button flips the card between light/dark class.
// TODO (you): type your whole component here, replacing this placeholder.

import { createContext, useContext } from "react";

const Theme = createContext("light");

export default function D05ContextTheme() {
  return <p className="card">D05 — not typed yet</p>;
}

export function useTheme() {
  return useContext(Theme);
}

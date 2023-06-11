import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/character">Characters</NavLink></li>
        <li><NavLink to="/location">Locations</NavLink></li>
        <li><NavLink to="/episode">Episodes</NavLink></li>
      </ul>

    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
    </>
  );
}
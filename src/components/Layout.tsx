import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Outlet />
    </>
  );
}

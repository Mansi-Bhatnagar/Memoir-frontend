import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="bg-black">
      <Outlet />
    </main>
  );
};
export default RootLayout;

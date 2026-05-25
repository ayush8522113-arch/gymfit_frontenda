import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default MainLayout;
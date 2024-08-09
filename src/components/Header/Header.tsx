//from new branch 
const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Hospital </h1>
        <nav>
        <a href="#services" className="mx-4 hover:text-gray-300">Services</a>

          
        </nav>
      </div>
    </header>
  );
};

export default Header;
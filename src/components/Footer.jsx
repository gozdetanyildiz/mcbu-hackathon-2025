const Footer = () => {
    return (
      <footer className="bg-darkBlue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center sm:flex-row justify-between">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold mb-2">MCBÜ - Manisa Celal Bayar Üniversitesi</h2>
              <p className="text-lg">Bir eğitimde fark yaratmaya devam ediyoruz.</p>
            </div>
            <div className="mt-6 sm:mt-0 flex space-x-6">
              <a href="#" className="text-primary hover:text-light">Facebook</a>
              <a href="#" className="text-primary hover:text-light">Twitter</a>
              <a href="#" className="text-primary hover:text-light">Instagram</a>
              <a href="#" className="text-primary hover:text-light">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
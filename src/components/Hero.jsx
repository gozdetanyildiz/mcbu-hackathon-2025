const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/university-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Gölgeleme */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Manisa Celal Bayar Üniversitesi</h1>
        <p className="text-lg md:text-2xl mb-6">Geleceğe yön veren bir üniversite deneyimi</p>
        <a
          href="#"
          className="bg-primary text-white font-semibold py-3 px-8 rounded-full text-xl hover:bg-light transition"
        >
          Üniversiteyi Keşfet
        </a>
      </div>
    </section>
  );
};

export default Hero;

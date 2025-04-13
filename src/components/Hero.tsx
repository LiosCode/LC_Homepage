export default function Hero() {
    return (
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/restaurant-hero.jpg"
            alt="Restaurant Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Willkommen in unserem Restaurant</h1>
            <p className="text-xl mb-8">Genießen Sie unsere handgefertigten Speisen</p>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100">
              Reservieren
            </button>
          </div>
        </div>
      </div>
    );
  }
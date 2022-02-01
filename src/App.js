import imgHero from './images/illustration-hero.svg';
import iconMusic from './images/icon-music.svg';

function App() {
  return (
    <main className="flex items-center justify-center h-screen bg-pale-blue bg-mobile-pattern sm:bg-desktop-pattern bg-repeat-x px-4">
      <section className="w-[400px] rounded-2xl overflow-hidden drop-shadow-2xl">
        <img src={imgHero} alt="Order summary banner" />
        <div className="bg-white p-8 space-y-3">
          <h1 className="text-center text-dark-blue text-2xl font-red-hat-display font-black">
            Order Summary
          </h1>
          <p className="text-center text-desaturated-blue">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex items-center bg-very-pale-blue rounded-xl p-5 space-x-4">
            <div>
              <img src={iconMusic} alt="Music icon" />
            </div>
            <div className="grow">
              <p className="font-bold">Annual Plan</p>
              <p className="text-desaturated-blue">$59.99/year</p>
            </div>
            <div>
              <button className="text-bright-blue underline hover:no-underline hover:text-bright-blue/60 transition font-bold text-sm font-red-hat-display">
                Change
              </button>
            </div>
          </div>
          <button className="bg-bright-blue hover:bg-bright-blue/60 transition text-white font-bold w-full p-3 rounded-xl drop-shadow-lg">
            Proceed to Payment
          </button>
          <button className="w-full p-3 text-desaturated-blue transition hover:text-dark-blue font-red-hat-display font-bold">
            Cancel Order
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

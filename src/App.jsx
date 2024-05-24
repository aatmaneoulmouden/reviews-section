import Heading from "./components/Heading";
import Reviews from "./components/Reviews";

function App() {
  return (
    <section className="reviews w-full h-screen flex flex-col justify-center items-center">
      <Heading />
      <Reviews />
    </section>
  );
}

export default App;

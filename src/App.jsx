import Heading from "./components/Heading";
import Reviews from "./components/Reviews";

function App() {
  return (
    <section className="reviews w-full min-h-screen flex flex-col justify-center items-center py-10">
      <Heading />
      <Reviews />
    </section>
  );
}

export default App;

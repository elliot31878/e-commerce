import { Footer } from "../components/Footer";
import { Main } from "../components/main";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Products />
      <Footer />
    </>
  );
}

export default Home;

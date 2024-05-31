import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const galleryImages = [
  "https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg",
  "https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg",
  "https://raw.githubusercontent.com/mrspecht/media/main/img/oceans-eleven.jpg",
  "https://raw.githubusercontent.com/mrspecht/media/main/img/jfk.jpg"
];

function App() {
  return (
    <>
      <Header title="MovieMax"/>
      <main>
        <div className="container">
          <Banner
            title="Explore the World of Movies"
            text="Discover the latest releases, timeless classics, and hidden gems."
            primaryBtnText="Get Started"
            secondaryBtnText="Learn More"
          />
          <Gallery images={galleryImages} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

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
      <Header title="Components"/>
      <main>
        <div className="container">
          <Banner
            title="Welcome to My Website"
            text="This is a banner description."
            primaryBtnText="Get Started"
            secondaryBtnText="Learn More"
          />
          <h2>Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

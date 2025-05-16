import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <Header />
      <Card
        title={"Xyfrux"}
        description={"Xyfrux loves Geocaching."}
        imageUrl={
          "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"
        }
        altText={"My cat Xan"}
      />
      <Footer />
    </>
  );
}

export default App;

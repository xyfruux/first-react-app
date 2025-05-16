import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

const lists = [
  {
    title: "Xyfrux",
    description: "Xyfrux loves Geocaching.",
    imageUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200",
    altText: "My cat Xan",
  },
  {
    title: "Henrik",
    description: "Henrik enjoys hiking and photography.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    altText: "A scenic mountain view",
  },
  {
    title: "Luna",
    description: "Luna is a night owl who loves stargazing.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg",
    altText: "A beautiful starry night sky",
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        {lists.map((list) => (
          <Card
            title={list.title}
            description={list.description}
            imageUrl={list.imageUrl}
            altText={list.altText}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;

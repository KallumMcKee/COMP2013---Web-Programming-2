import "./app.css";
import Card from "./components/Card.jsx";

const resorts = [
  {
    img: "/images/1.jpg",
    country: "Indonesia",
    hotel: "Gili Air Hotel",
    rating: 4.8,
    price: "$589",
  },
  {
    img: "/images/2.jpg",
    country: "Seychelles",
    hotel: "Hilton Resort",
    rating: 4.2,
    price: "$629",
  },
  {
    img: "/images/3.jpg",
    country: "US Virgin Islands",
    hotel: "Goa Resort",
    rating: 3.5,
    price: "$485",
  },
  {
    img: "/images/4.jpg",
    country: "Bahamas",
    hotel: "Kuredu Resort",
    rating: 4.1,
    price: "$729",
  },
  {
    img: "/images/5.jpg",
    country: "Mauritius",
    hotel: "Trou D'eau Douce",
    rating: 4.9,
    price: "$877",
  },
  {
    img: "/images/6.jpg",
    country: "Bermuda",
    hotel: "Staniel Cay Hotel",
    rating: 3.2,
    price: "$365",
  },
];

export default function App() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>Resorts Lite</h1>
        <div className="rule" />
      </header>

      <section className="grid">
        {resorts.map((r) => (
          <Card
            key={r.country}
            imgageSource={r.img}
            country={r.country}
            hotel={r.hotel}
            rating={r.rating}
            price={r.price}
          />
        ))}
      </section>
    </main>
  );
}

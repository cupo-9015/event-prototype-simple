import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Dummy Event Data
const events = [
  { id: 1, title: "Rok Koncert Trebinje", date: "2025-09-12", category: "Koncerti", location: "Dom omladine Trebinje", image: "https://picsum.photos/400/200?random=1" },
  { id: 2, title: "Pozorišna predstava: Moji mali hrčki", date: "2025-09-15", category: "Pozorište", location: "Dom kulture Trebinje", image: "https://picsum.photos/400/200?random=2" },
  { id: 3, title: "Umjetnička izložba: Moderna umjetnost", date: "2025-09-18", category: "Izložbe", location: "Muzej Hercegovine Trebinje", image: "https://picsum.photos/400/200?random=3" },
];

// Navigation
function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Aktuelno u Trebinju</h1>
      <div className="space-x-4">
        <Link to="/">Početna stranica</Link>
        <Link to="/events">Događanja</Link>
        <Link to="/calendar">Kalendar</Link>
        <Link to="/about">Ko smo mi?</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </nav>
  );
}

// Startseite
function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Finde Veranstaltungen in deiner Stadt</h2>
      <input type="text" placeholder="Suche nach Events..." className="border p-2 w-full rounded mb-6" />
      <h3 className="text-xl font-semibold mb-4">Highlights</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="border rounded-2xl shadow p-4">
            <img src={event.image} alt={event.title} className="rounded-t-2xl mb-2" />
            <h4 className="font-bold text-lg">{event.title}</h4>
            <p>{event.date} – {event.location}</p>
            <Link to={`/events/${event.id}`} className="text-blue-600 underline mt-2 block">Mehr erfahren</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Veranstaltungen
function EventList() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Alle Veranstaltungen</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="border rounded-2xl shadow p-4">
            <img src={event.image} alt={event.title} className="rounded-t-2xl mb-2" />
            <h4 className="font-bold text-lg">{event.title}</h4>
            <p>{event.date} – {event.location}</p>
            <Link to={`/events/${event.id}`} className="text-blue-600 underline mt-2 block">Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Event Detailseite
function EventDetailWrapper() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));
  if (!event) return <p className="p-6">Event nicht gefunden.</p>;
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <img src={event.image} alt={event.title} className="rounded-2xl mb-4" />
      <p><strong>Datum:</strong> {event.date}</p>
      <p><strong>Ort:</strong> {event.location}</p>
      <p><strong>Kategorie:</strong> {event.category}</p>
    </div>
  );
}

// Kalender
function Calendar() {
  return <div className="p-6"><h2 className="text-2xl font-bold">Kalendar (primjer)</h2></div>;
}

// Über uns
function About() {
  return <div className="p-6"><h2 className="text-2xl font-bold">Ko smo mi?</h2><p>Wir sind eine Eventplattform für deine Stadt.</p></div>;
}

// Kontakt
function Contact() {
  return <div className="p-6"><h2 className="text-2xl font-bold">Kontakt</h2><p>Pošalji nam poruku.</p></div>;
}

// App-Komponente
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetailWrapper />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

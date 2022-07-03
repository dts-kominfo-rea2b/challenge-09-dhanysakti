import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App main">
      <Header title="Your friendly contact app" />
      <Contact contacts={contacts} />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreem from './screen/ProductScreem';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header >
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreem />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

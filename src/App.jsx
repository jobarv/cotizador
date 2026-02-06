import { useState } from 'react';
import BrandSwitcher from './components/BrandSwitcher/BrandSwitcher';
import QuoteForm from './components/QuoteForm/QuoteForm';

function App() {
  // 'brandA' o 'brandB'
  const [brand, setBrand] = useState('brandA');

  return (
    <>
      <div className={`app-container ${brand}`}>
        <BrandSwitcher currentBrand={brand} setBrand={setBrand} />
        <QuoteForm brand={brand} />
      </div>
    </>
  );
}

export default App;
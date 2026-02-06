import { useState } from 'react';
import styles from './QuoteForm.module.css';
import QuotePDF from '../QuotePDF';

const QuoteForm = ({ brand }) => {
  const [formData, setFormData] = useState({ client: '', total: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles.formWrapper} data-brand={brand}>
        <h2 className={styles.title}>
          Cotizador: {brand === 'brandA' ? 'Tech Solutions' : 'Creativa Design'}
        </h2>

        <form className={styles.form}>
          <input name="client" placeholder="Nombre del cliente" onChange={handleChange} />
          <input name="total" type="number" placeholder="Total" onChange={handleChange} />
        </form>

        {/* El botón de PDF que usarás más adelante */}
        <QuotePDF data={formData} brand={brand} />
      </div>
    </>
  );
};

export default QuoteForm;
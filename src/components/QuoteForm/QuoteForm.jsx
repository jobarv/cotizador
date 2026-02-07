import { useState } from 'react';
import styles from './QuoteForm.module.css';
import QuotePDF from '../QuotePDF';

const QuoteForm = ({ brand }) => {
  const [formData, setFormData] = useState({ client: '', service: '', total: 0 });

  // Consistencia: Una sola fuente de verdad para el nombre
  const companyName = brand === 'brandA' ? 'Motiontech' : 'Barras Designs';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles.formWrapper} data-brand={brand}>
        <h2 className={styles.title}>Cotizador: {companyName}</h2>

        <form className={styles.form}>
          <input name="client" placeholder="Nombre del cliente" onChange={handleChange} />
          <input name="service" placeholder="Servicio" onChange={handleChange} />
          <input name="total" type="number" placeholder="Total" onChange={handleChange} />
        </form>

        <div style={{ marginTop: '20px' }}>
          {/* Pasamos companyName y usamos los datos del estado */}
          <QuotePDF data={formData} brand={companyName} />
        </div>
      </div>
    </>
  );
};


export default QuoteForm;
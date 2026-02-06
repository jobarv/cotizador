import styles from './BrandSwitcher.module.css';

const BrandSwitcher = ({ currentBrand, setBrand }) => {
    return (
        <>
            <div className={styles.container}>
                <button
                    className={currentBrand === 'brandA' ? styles.active : ''}
                    onClick={() => setBrand('brandA')}
                >
                    Emprendimiento A
                </button>
                <button
                    className={currentBrand === 'brandB' ? styles.active : ''}
                    onClick={() => setBrand('brandB')}
                >
                    Emprendimiento B
                </button>
            </div>
        </>
    );
};

export default BrandSwitcher;
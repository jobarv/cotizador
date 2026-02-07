import styles from './BrandSwitcher.module.css';

const BrandSwitcher = ({ currentBrand, setBrand }) => {
    return (
        <>
            <div className={styles.container}>
                <button
                    className={currentBrand === 'brandA' ? styles.active : ''}
                    onClick={() => setBrand('brandA')}
                >
                    MOTIONTECH
                </button>
                <button
                    className={currentBrand === 'brandB' ? styles.active : ''}
                    onClick={() => setBrand('brandB')}
                >
                    BARRAS DESIGNS
                </button>
            </div>
        </>
    );
};

export default BrandSwitcher;
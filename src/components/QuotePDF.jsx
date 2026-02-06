import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const QuotePDF = ({ data, brand }) => {
    // Estilos dinámicos para el PDF
    const pdfStyles = StyleSheet.create({
        page: { padding: 30 },
        header: {
            fontSize: 24,
            color: brand === 'brandA' ? '#2563eb' : '#db2777',
            marginBottom: 20
        },
        content: { fontSize: 12 }
    });

    const MyDoc = (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View>
                    <Text style={pdfStyles.header}>Cotización {brand.toUpperCase()}</Text>
                    <Text style={pdfStyles.content}>Cliente: {data.client}</Text>
                    <Text style={pdfStyles.content}>Total: ${data.total}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <>
            <PDFDownloadLink document={MyDoc} fileName="cotizacion.pdf">
                {({ loading }) => (loading ? 'Generando...' : 'Descargar PDF')}
            </PDFDownloadLink>
        </>
    );
};

export default QuotePDF;
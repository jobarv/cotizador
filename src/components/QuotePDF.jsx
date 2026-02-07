import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const QuotePDF = ({ data, brand }) => {
    const pdfStyles = StyleSheet.create({
        page: { padding: 30 },
        header: {
            fontSize: 24,
            // Ahora comparamos con el nombre real que viene de la prop
            color: brand === 'Motiontech' ? '#2563eb' : '#9c27db',
            marginBottom: 20
        },
        content: { fontSize: 12, marginBottom: 5 }
    });

    // Definimos el documento aquí para que reaccione a los cambios de 'data' y 'brand'
    const MyDoc = (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View>
                    <Text style={pdfStyles.header}>Cotización {brand}</Text>
                    <Text style={pdfStyles.content}>Cliente: {data.client || '---'}</Text>
                    <Text style={pdfStyles.content}>Servicio: {data.service || '---'}</Text>
                    <Text style={pdfStyles.content}>Total: ${data.total || 0}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <>
            <PDFDownloadLink
                document={MyDoc}
                fileName={`cotizacion_${brand.toLowerCase()}.pdf`}
                style={{
                    textDecoration: 'none',
                    padding: '10px',
                    color: '#fff',
                    backgroundColor: brand === 'Motiontech' ? '#2563eb' : '#9c27db',
                    borderRadius: '5px'
                }}
            >
                {({ loading }) => (loading ? 'Preparando archivo...' : 'Descargar PDF')}
            </PDFDownloadLink>

        </>
    );
};

export default QuotePDF;
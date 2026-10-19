public class ExportadorPDF implements Exportador {
    @Override
    public boolean soportaFormato(Formato formato) {
        return formato == Formato.PDF;
    }
    @Override
    public Documento exportar(Documento documento) {
        return documento;
    }
}

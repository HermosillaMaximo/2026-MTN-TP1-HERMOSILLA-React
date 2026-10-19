public class ExportarExcel implements Exportador {
    private Formato format;

    @Override
    public boolean soportaFormato(String formato) {
        if (formato.equals(Formato.EXCEL)) {
            return true;
        }
        return false;
    }

    @Override
    public Documento exportar(Documento documento) {
        // Implement Excel export logic here
        return documento;
    }
}

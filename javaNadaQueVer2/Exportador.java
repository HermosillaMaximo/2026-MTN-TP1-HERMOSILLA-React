public interface Exportador {
    boolean soportaFormato(Formato formato);
    Documento exportar(Documento documento);
}

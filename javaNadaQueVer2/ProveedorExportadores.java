import java.util.ArrayList;

public class ProveedorExportadores {
    private ArrayList<Exportador> exportadores;
    
    public ProveedorExportadores() {
        this.exportadores = new ArrayList<>();
    }
    
    public void agregarExportador(Exportador exportador) {
        this.exportadores.add(exportador);
    }
    

    public Exportador darFormato(Formato formato) {
        for ( Exportador exportador : exportadores) {
           if (exportador.soportaFormato(formato)){
               return exportador;
           }
        }
        throw new NullPointerException("No se encontró un exportador para el formato: " + formato);
    }
}
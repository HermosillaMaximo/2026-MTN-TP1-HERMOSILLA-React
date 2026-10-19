public class ServiceProveedor {
    private ProveedorExportadores proveedorExportadores;
    
    public ServiceProveedor(ProveedorExportadores proveedorExportadores) {
        this.proveedorExportadores = proveedorExportadores;
    }

    public void chequeoFormato(Documento docs, Formato formato) {
        proveedorExportadores.darFormato(formato).exportar(docs);
    }

}

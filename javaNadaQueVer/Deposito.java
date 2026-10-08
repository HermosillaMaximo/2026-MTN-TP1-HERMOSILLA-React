public class Deposito implements ObservadorDeVenta {
    @Override
    public void ventaRealizada(Venta venta) {
        // Acá iría la llamada a la Web API del depósito
        System.out.println("Depósito: preparar " + venta.getProducto().getNombre());
    }
}
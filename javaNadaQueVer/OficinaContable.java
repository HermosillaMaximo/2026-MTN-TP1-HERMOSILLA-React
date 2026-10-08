public class OficinaContable implements ObservadorDeVenta {
    @Override
    public void ventaRealizada(Venta venta) {
        // Acá iría la llamada REST al sistema contable
        System.out.println("Contable: registrando $" + venta.getPrecioFinal());
    }
}
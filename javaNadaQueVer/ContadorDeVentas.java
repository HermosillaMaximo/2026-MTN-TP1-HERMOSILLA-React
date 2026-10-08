public class ContadorDeVentas implements ObservadorDeVenta {
    private int cantidad = 0;

    @Override
    public void ventaRealizada(Venta venta) {
        cantidad++;
        System.out.println("Contador: ventas del día = " + cantidad);
    }
}
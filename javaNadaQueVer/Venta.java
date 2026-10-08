public class Venta {
    private final Producto producto;
    private final double precioFinal;

    public Venta(Producto producto) {
        this.producto = producto;
        this.precioFinal = producto.precioFinal();
    }

    public Producto getProducto() { return producto; }
    public double getPrecioFinal() { return precioFinal; }
}
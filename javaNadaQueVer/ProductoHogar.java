public class ProductoHogar extends Producto {
    private Impuesto ei;

    public ProductoHogar(String nombre, double precioBase, Impuesto iva, Impuesto ei) {
        super(nombre, precioBase, iva);
        this.ei = ei;
    }

    @Override
    public double impuestoPropio(double precioBase) {
        return ei.calcular(precioBase);
    }
}
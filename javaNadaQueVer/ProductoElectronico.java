public class ProductoElectronico extends Producto {
    private Impuesto eo;

    public ProductoElectronico(String nombre, double precioBase, Impuesto iva, Impuesto eo) {
        super(nombre, precioBase, iva);
        this.eo = eo;
    }

    @Override
    public double impuestoPropio(double precioBase) {
        return eo.calcular(precioBase);
    }
}
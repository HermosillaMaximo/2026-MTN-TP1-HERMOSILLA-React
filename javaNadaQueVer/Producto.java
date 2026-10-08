public abstract class Producto {
    private String nombre;
    private double precioBase;
    private Impuesto iva;

    public Producto(String nombre, double precioBase, Impuesto iva) {
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.iva = iva;
    }

    public double precioFinal() {
        return precioBase + iva.calcular(precioBase) + impuestoPropio(precioBase);
    }

    
    public String getNombre() {
        return nombre;
    }

    public double getPrecioBase() {
        return precioBase;
    }

    public abstract double impuestoPropio(double precioBase);

}
public class IVA implements Impuesto {
    private double porcentaje;

    public IVA(double porcentaje) {
        this.porcentaje = porcentaje;
    }

    @Override
    public double calcular(double precioBase) {
        return precioBase * porcentaje / 100;
    }
}
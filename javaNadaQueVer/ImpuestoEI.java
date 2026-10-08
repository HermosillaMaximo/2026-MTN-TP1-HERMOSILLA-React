public class ImpuestoEI implements Impuesto {
    private double porcentaje;

    public ImpuestoEI(double porcentaje) {
        this.porcentaje = porcentaje;
    }

    @Override
    public double calcular(double precioBase) {
        return precioBase * porcentaje / 100;
    }
}

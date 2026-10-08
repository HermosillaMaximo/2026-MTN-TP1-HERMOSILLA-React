public class ImpuestoEO implements Impuesto {
    private double gananciasImpositivas;

    public ImpuestoEO(double gananciasImpositivas) {
        this.gananciasImpositivas = gananciasImpositivas;
    }

    @Override
    public double calcular(double precioBase) {
        return (0.5 * precioBase) / (4 * gananciasImpositivas);
    }
}
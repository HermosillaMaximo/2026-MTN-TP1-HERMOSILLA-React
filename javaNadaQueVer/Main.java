public class Main {
    public static void main(String[] args) {
        Producto tele = new ProductoElectronico("Tele", 1000,
                new IVA(0.21), new ImpuestoEO(4));
        Producto licuadora = new ProductoHogar("Licuadora", 1000,
                new IVA(0.21), new ImpuestoEI(3.5));

        System.out.print(tele.precioFinal());
        System.out.print(licuadora.precioFinal());  
    }
}
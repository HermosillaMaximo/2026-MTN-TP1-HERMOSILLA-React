

import java.util.HashMap;
import java.util.Map;   

public class Documento {
    private String titulo;
    private String contenido;
    private String autor;
    private Map<String, String> datos;  

    public Documento(String titulo, String contenido, String autor) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;                 
        this.datos = new HashMap<>();
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Map<String, String> getDatos() {
        return datos;
    }

    public void setDatos(Map<String, String> datos) {
        this.datos = datos;
    }   
}

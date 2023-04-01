package com.example.evaluacion.servicio;

import com.example.evaluacion.entidad.Producto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;

public class servicioProducto {
    private ArrayList<Producto> lista = new ArrayList<>();
    private ArrayList<Producto> minimos = new ArrayList<>();

    public servicioProducto(){
        lista.add(new Producto(1,"pera","frutas",6000,4));
        lista.add(new Producto(2,"manzana","frutas",7000,5));
        lista.add(new Producto(3,"pepino","verdura",6000,6));
        lista.add(new Producto(4,"tomate","verdura",2000,2));
    }

    public String agregarProducto(Producto p){
        lista.add(p);
        return "Registro exitoso";
    }

    public ArrayList<Producto> mostar() {
        return lista;
    }

    public Producto Eliminar(Producto p){
        Producto mostrar = p;
        for (Producto pt : lista) {
            if (pt.getCodigo() == p.getCodigo()) {
                lista.remove(pt);
                break;
            }
        }
        return mostrar;
    }


    public Producto PrecioMayor() {

        Producto total = null;
        int precioMay = 0;
        for (Producto pt : lista) {
            if (pt.getTotal() > precioMay) {
                precioMay = pt.getTotal();
                total = pt;
            }
        }
        /*1*/
        return total;
    }

    public ArrayList<Producto> PrecioMenor() {

        Producto min = PrecioMayor();

        minimos.clear();
        for (Producto pn : lista) {
            if (pn.getTotal() < min.getTotal()) {
                min = pn;
            }
        }

        for (Producto pn : lista) {
            if (pn.getTotal() == min.getTotal()) {
                /*4. */
                minimos.add(pn);
            }
        }
        return minimos;
    }

    public String editar(int codigo, Producto p) {
        String mensaje = "no se encontro el producto a editar";
        for (Producto pr: lista){
            if (codigo == pr.getCodigo()){
                lista.add(p);
                lista.remove(pr);
                mensaje = "El producto con codigo " + p.getCodigo() + " se edito correctamente";
                break;
            }
        }
        return mensaje;
    }




    }

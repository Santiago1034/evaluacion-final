package com.example.evaluacion.servicio;

import com.example.evaluacion.entidad.Producto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;

public class servicioProducto {
    private ArrayList<Producto> lista = new ArrayList<>();

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

        var total = 0;
        for (Producto pm : lista) {
            total = pm.getPrecio() * pm.getCantidad();
            pm.setTotal(total);
        }
        return lista;
    }

    /*public String precioMayor(){
        ArrayList<Producto> listtotal = new ArrayList<>();
        var  max = 0;
        Boolean cond = false;

        for (Producto pm:lista){
            if (pm.getTotal()> max){
                max = pm.getTotal();
                listtotal.add(pm);
                cond = true;


            }

        }
        if(cond == true){
            for (Producto pe:listtotal){
                lista.remove(pe);
            }


        }
        return  "el total maximo es " + max ;

    }*/


    public String PrecioMayor(){
        Producto total = null;
        int precioMay = 0;
        for (Producto pt:lista){
            if (pt.getTotal()> precioMay){
                precioMay = pt.getTotal();
                total = pt;

            }
        }lista.remove(total);
        return "el precio mayor es " + precioMay ;

    }

    public String PrecioMenor(Producto pz) {
        Producto min = null;
        int preciomin = 0;

        for (Producto pn : lista) {
            if (pn.getTotal() > 0 && pn.getTotal() < 10000000) {
                preciomin = pn.getTotal();
                min = pn;



            }



        }lista.remove(min);
        lista.add(pz);
        return "el precio minimo es " + min;
    }
    }

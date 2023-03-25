package com.example.evaluacion.controlador;

import com.example.evaluacion.entidad.Producto;
import com.example.evaluacion.servicio.servicioProducto;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@CrossOrigin(origins= "*",maxAge=3600)
@RestController
public class controladorProducto {

    servicioProducto sp = new servicioProducto();

    @GetMapping("/producto")
    public ArrayList<Producto> lista(){return sp.mostar();}

    @PostMapping("/agregar-producto")
    public String agregar(@RequestBody Producto p){return sp.agregarProducto(p);}

    @GetMapping("/precio-mayor")
    public Producto mayor(){return sp.Eliminar(sp.PrecioMayor());}

    @GetMapping("/precio-min")
    public ArrayList<Producto> minimo(){return sp.PrecioMenor();}

    @PutMapping("/editar/{cod}")
    public String editar(@PathVariable("cod") int cod, @RequestBody Producto p) {return sp.editar(cod, p);}

    }




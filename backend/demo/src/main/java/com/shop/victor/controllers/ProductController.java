package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.products.Products;
import com.bezkoder.springjwt.products.ProductsRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/")
public class ProductController {


    private ProductsRepository productsRepository;


    @GetMapping("/products")
    public List<Products> getProucts () {
        return (List<Products>) this.productsRepository.findAll();
    }

}

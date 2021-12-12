package com.bezkoder.springjwt.products;

import com.bezkoder.springjwt.products.Products;
import com.bezkoder.springjwt.products.ProductsRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/")
public class ProductController {


    private ProductsRepository productsRepository;
    private ProductService productService;

    @GetMapping("/products")
    public Page<Products> getProducts(@RequestParam(name = "page", required = true) int page, @RequestParam(name = "limit", required = true) int limit) {
        return productService.findProductsWithPagination(page, limit);
    }

}

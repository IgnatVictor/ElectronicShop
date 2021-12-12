package com.shop.victor.products;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;


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

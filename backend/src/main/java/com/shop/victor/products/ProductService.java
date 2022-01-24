package com.shop.victor.products;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class ProductService {

    @Autowired
    private  ProductsRepository productsRepository;

    public List<Products> findAllProducts() {
        return productsRepository.findAll();
    }

    public Page<Products> findProductsWithPagination(int offset,int pageSize){
        Page<Products> products = productsRepository.findAll(PageRequest.of(offset, pageSize));
        return  products;
    }

    public Page<Products> findProductsWithPaginationAndCategory(int offset,int pageSize, String category) {
        Page<Products> products = productsRepository.findAllByCategory(PageRequest.of(offset, pageSize),category);
        return  products;
    }

    public Page<Products> searchProductsWithPaginationAndCategory(int offset,int pageSize, String search) {
        Page<Products> products = productsRepository.findByDescriptionContains(PageRequest.of(offset, pageSize),search);
        return products;
    }


}

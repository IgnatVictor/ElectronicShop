package com.shop.victor.products;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;



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


}

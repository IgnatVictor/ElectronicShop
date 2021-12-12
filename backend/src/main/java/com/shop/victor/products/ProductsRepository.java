package com.shop.victor.products;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {


      Products getProductsById(Long id);



}

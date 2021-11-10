package com.bezkoder.springjwt.products;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {

        Products getProductsById(Long id);
}

package com.shop.victor.products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {


      Products getProductsById(Long id);

//      Products getProductsByCategory(String category);

      Page<Products> findAllByCategory(Pageable var1,String category);

      Page<Products> findByDescriptionContains(Pageable var1,String search);


}

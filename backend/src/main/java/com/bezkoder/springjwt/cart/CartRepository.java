package com.bezkoder.springjwt.cart;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

    default void addInCart(Long cartId, Long productId) {

        if(this.findById(cartId).isEmpty()){
            Cart cart = new Cart();
            cart.setCart_id(cartId);
            List<Long> products = new ArrayList<>();
            products.add(productId);
            cart.setProduct_id(products);
            this.save(cart);
        } else {
            Cart cartToUpdate = this.getById(cartId);
            cartToUpdate.getProduct_id().add(productId);
            this.save(cartToUpdate);
        }
    }




}

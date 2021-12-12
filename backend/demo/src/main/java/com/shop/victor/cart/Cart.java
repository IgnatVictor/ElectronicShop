package com.bezkoder.springjwt.cart;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.products.Products;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cart {



    @Id
    private Long cart_id;


    @ElementCollection
    private List<Long> product_id;



}



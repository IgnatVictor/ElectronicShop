package com.shop.victor.order;
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
public class Order {



    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long order_id;

    private String order;

    public Order( String order) {
        this.order = order;
    }

    @Override
    public String toString() {
        return "Order{" +
                "order_id=" + order_id +
                ", order='" + order + '\'' +
                '}';
    }



}
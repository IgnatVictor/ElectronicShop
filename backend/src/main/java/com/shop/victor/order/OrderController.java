package com.shop.victor.order;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/order")
public class OrderController {




//    @GetMapping("/")
//    public void addOrder(@RequestParam( name = "orderData",required = true) List orderData  ) {
//        System.out.println(orderData);
//    }

    @PostMapping("/")
    public void addOrder(@RequestBody Order order  ) {
        System.out.println(order);
    }
}

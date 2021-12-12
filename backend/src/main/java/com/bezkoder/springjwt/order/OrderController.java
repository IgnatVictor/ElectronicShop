package com.bezkoder.springjwt.order;
import com.bezkoder.springjwt.order.Order;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

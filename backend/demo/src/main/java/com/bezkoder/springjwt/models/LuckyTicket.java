package com.bezkoder.springjwt.models;

public class LuckyTicket {
    public int numberOfTickets(int from, int to) {
        var count = 0;
        String[] y;
        for (int x = from; x <= to; x++) {
             y = String.valueOf(x).split("");
            System.out.println(y);
//       if(Integer.parseInt(y[0])+Integer.parseInt(y[1])+ Integer.parseInt(y[2])] == Integer.parseInt(y[3])+Integer.parseInt(y[4])+Integer.parseInt(y[5])) {
//         count = count+1;
//       }
        }
        return 0;
    }
 public static void main(String[] args) {
        LuckyTicket luckyTicket =  new LuckyTicket();
     System.out.println(luckyTicket.numberOfTickets(100000,999999));
 }
}

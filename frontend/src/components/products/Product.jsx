import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
// import axios from "axios";

import useStyles from "./style";

function Product(props) {
  const classes = useStyles();
  const {product, onAdd} = props;
  

  // const addToCart = (product) => {
  //   const url =
  //     "http://localhost:8080/api/cart/addInCart/?userId=" +
  //     localStorage.getItem("id") +
  //     "&product_id=" +
  //     product.id;

  //   axios.post(url).then((response) => {
  //     localStorage.setItem("quantity", JSON.stringify(response.data));
  //   });
  // };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price + "$"}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {" "}
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton  aria-label="Add to Cart">
          <AddShoppingCart
            onClick=  {()=> {onAdd(product)}}
            
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;

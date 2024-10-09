import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link as Links } from "react-router-dom";
// import { fetchProduct } from "../store/actions/actionCreator";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");
  const getProducts = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/product`, {
      params: { category: categoryParams || "" },
    });
    setProducts(response?.data);
  };

  useEffect(() => {
    getProducts();
  }, [categoryParams]);
  //   const { products } = useSelector((state) => {
  //     return state.products;
  //   });
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchProduct());
  //   }, []);
  return (
    <>
      <div className="flex justify-center">
        {products.length > 0 ? (
          <div className="grid gap-4 md:gap-2 grid-cols-2 md:grid-cols-4 max-w-screen-lg w-full">
            {products.map((el) => (
              <Card
                key={el.id}
                sx={{ maxWidth: 345 }}
                className="card h-full flex flex-col"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140" // Adjusted height to 140 for better visibility
                    image={el.mainImg}
                    alt="Card Image"
                  />
                </CardActionArea>
                <div className="flex flex-col flex-grow justify-between">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="6"
                      component="div"
                      className="p-0"
                    >
                      {el.name}
                    </Typography>
                  </CardContent>
                  <div className="flex bottom-0 items-center justify-between p-2 space-x-2">
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-sm">${el.price}</p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Links to={`/product/${el.id}`}>
                        <Button size="small" color="primary">
                          <p className="text-xs">See Details</p>
                        </Button>
                      </Links>
                    </CardActions>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex-grow flex flex-col justify-center items-center">
            <h1>Product not found!</h1>
          </div>
        )}
      </div>
    </>
  );
}

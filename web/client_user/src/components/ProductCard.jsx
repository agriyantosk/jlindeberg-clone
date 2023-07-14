import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Links } from "react-router-dom";
import { fetchProduct } from "../store/actions/actionCreator";

export default function ProductCard() {
    const { products } = useSelector((state) => {
        return state.products;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);
    return (
        <>
            <div className="flex justify-center">
                <div className="grid gap-4 md:gap-2 grid-cols-2 md:grid-cols-4 max-w-screen-lg w-full">
                    {products.map((el) => (
                        <Card
                            key={el.id}
                            sx={{ maxWidth: 345 }}
                            className="card"
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={el.mainImg}
                                    alt="Card Image"
                                />
                            </CardActionArea>
                            <div className="flex ">
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="6"
                                        component="div"
                                    >
                                        {el.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        ${el.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Links to={`/product/${el.id}`}>
                                        <Button size="small" color="primary">
                                            See Details
                                        </Button>
                                    </Links>
                                </CardActions>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

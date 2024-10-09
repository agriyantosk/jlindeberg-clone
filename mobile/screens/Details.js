import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import ProductCard from "../components/ProductCard";
// import { useQuery, gql } from "@apollo/client";
import ProductCarousel from "../components/ProductCarousel";

const { height, width } = Dimensions.get("window");

const vh = height / 100;
const vw = width / 100;

export default function Details({ navigation, route }) {
  const { productId } = route.params;
  const [products, setProduct] = useState([]);
  // const detailData = gql`
  //     query ExampleQuery($productByIdId: ID) {
  //         productById(id: $productByIdId) {
  //             id
  //             name
  //             slug
  //             description
  //             price
  //             mainImg
  //             categoryId
  //             mongoId
  //             Images {
  //                 id
  //                 productId
  //                 imgUrl
  //             }
  //             Category {
  //                 id
  //                 name
  //             }
  //         }
  //         authors {
  //             _id
  //             username
  //             email
  //             phoneNumber
  //             address
  //             password
  //             role
  //         }
  //     }
  // `;

  // console.log(productId, '<<<<');
  // const { loading, error, data } = useQuery(detailData, {
  //     variables: {
  //         productByIdId: productId,
  //     },
  // });
  const product = products;
  const authorData = products?.authors;
  const author = authorData?.find((el) => el._id === product.mongoId);
  const username = author?.username;
  const productImages = products?.productById?.Images;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jlind.griyan.site/product/${productId}`
      );
      if (!response.ok) {
        response.text();
      } else {
        const data = await response.json();
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let io = {
    Category: {
      createdAt: "2023-05-27T12:45:11.621Z",
      id: 1,
      name: "Sport",
      updatedAt: "2023-05-27T12:45:11.621Z",
    },
    Images: [
      {
        createdAt: "2023-05-27T12:45:11.621Z",
        id: 101,
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0674/3336/5782/products/287d358afa1eede329bcdd53a9c4cc56_001.jpg?v=1681779978&width=1200",
        productId: 1,
        updatedAt: "2023-05-27T12:45:11.621Z",
      },
      {
        createdAt: "2023-05-29T07:04:18.145Z",
        id: 102,
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0674/3336/5782/products/aa02c26c2eaca549ef9190c18458917f_004.jpg?v=1681961779&width=1200",
        productId: 1,
        updatedAt: "2023-05-29T07:04:18.145Z",
      },
      {
        createdAt: "2023-05-29T07:04:18.173Z",
        id: 103,
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0674/3336/5782/products/bd34385cd23348889b64ccc418ec369d_006.jpg?v=1681961786&width=1200",
        productId: 1,
        updatedAt: "2023-05-29T07:04:18.173Z",
      },
      {
        createdAt: "2023-05-29T07:04:18.174Z",
        id: 104,
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0674/3336/5782/products/b0bfb2a60f2c454203fdbc6c1be86110_005.jpg?v=1681961782&width=1200",
        productId: 1,
        updatedAt: "2023-05-29T07:04:18.174Z",
      },
    ],
    categoryId: 1,
    createdAt: "2023-05-27T12:45:11.621Z",
    description:
      "Crafted from our brand new material, Tech Mesh Jersey, Benji is a polo shirt that is sure to stand out. This flexible and stretchy style boasts moisture-wicking and quick-drying capabilities, as well as a ribbed spread collar that features an eye-catching contrast stripe. Proudly finished with the iconic JL logo in a silicone print at the chest, we recommend that you create a cool and coordinated summer ensemble by styling the Benji Regular Fit Polo with the Logo Shorts in a complementing or clashing colorway.",
    id: 1,
    mainImg:
      "https://cdn.shopify.com/s/files/1/0674/3336/5782/products/42248a30f7c32c4d3d8b36ae12c676c3_003.jpg?v=1681961750",
    mongoId: "6471e01f52df82de0be1fe18",
    name: "BENJI REGULAR FIT POLO",
    price: 250,
    slug: "typicode",
    updatedAt: "2023-05-27T12:45:11.621Z",
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView>
      {/* {loading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: height * 0.5
                    }}
                >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : error ? (
                <Text>Error: {error.message}</Text>
            ) : ( */}
      <View style={{ flex: 1, marginBottom: 15 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: product?.mainImg,
            }}
            style={{
              height: 50 * vh,
              width: 100 * vw,
              overflow: "hidden",
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "400" }}>
            {product?.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            AED {product?.price}.00
          </Text>
        </View>
        <View style={{ paddingHorizontal: 15, gap: 10 }}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 25 * vw,
                alignItems: "center",
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: "center",
                marginTop: 15,
                backgroundColor: "black",
              }}
            >
              <Text style={{ color: "white" }}>{product?.Category?.name}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.5,
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400" }}>IN STOCK</Text>
              <Text>Size:</Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "grey",
                    padding: 5,
                    width: 30,
                    height: 30,
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  S
                </Text>
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "grey",
                    padding: 5,
                    width: 30,
                    height: 30,
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  M
                </Text>
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "grey",
                    padding: 5,
                    width: 30,
                    height: 30,
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  L
                </Text>
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "grey",
                    padding: 5,
                    width: 30,
                    height: 30,
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  XL
                </Text>
              </View>
            </View>
          </View>
          <View style={{ gap: 30 }}>
            <Text style={{ lineHeight: 24 }}>{product?.description}</Text>
            <Text style={{ lineHeight: 24 }}>Designer: {username}</Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <ProductCarousel productImages={productImages} />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 75,
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            YOU MAY ALSO LIKE
          </Text>
          <ProductCard navigation={navigation} limit={2} />
        </View>
      </View>
      {/* )} */}
    </ScrollView>
  );
}

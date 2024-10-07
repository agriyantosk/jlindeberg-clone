import { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function ProductCard(props) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Handle loading state
  const { navigation, limit } = props;

  // Fetch data from the server
  const getData = async () => {
    try {
      const response = await fetch("http://192.168.18.41:3000/product");
      if (!response.ok) {
        return;
      } else {
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);  // Stop the loader after fetching data
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);  // Stop loader if error occurs
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {product.slice(0, limit).map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("Shop", {
              screen: "Details",
              params: { productId: item.id },
            })}
            style={{ width: width * 0.45, marginBottom: 20 }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{ uri: item.mainImg }}
                style={{ height: height * 0.2, width: "100%" }}
              />
              <Text numberOfLines={1} style={{ marginTop: 10, fontSize: 12 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                AED {item.price}.00
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
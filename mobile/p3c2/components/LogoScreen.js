import { View, Image, Dimensions } from "react-native";

export default function LogoScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 30,
            }}
        >
            <Image
                style={{
                    width: "100%",
                    height: 200,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://cdn.shopify.com/s/files/1/0344/3051/7383/files/Logo_without_Bridge_black-01_TIGHT.jpg?height=628&pad_color=ffffff&v=1620222842&width=1200",
                }}
            />
        </View>
    );
}

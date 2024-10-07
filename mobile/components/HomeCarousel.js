import React, { useRef, useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");
const carouselItem = require("../carousel.json");
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export default function HomeCarousel() {
  let flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= carouselItem.length) {
        newIndex = 0;
      }
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("clicked")}
        activeOpacity={1}
      >
        <Image source={{ uri: item.url }} style={styles.image} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>{item.title}</Text>
          <Text style={styles.footerText}>{item.promo}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          data={carouselItem}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          style={styles.carousel}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef.current}
          horizontal={false}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />

        <View style={styles.dotView}>
          {carouselItem.map(({}, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={[
                styles.circle,
                {
                  backgroundColor: index === currentIndex ? "black" : "grey",
                },
              ]}
              onPress={() => scrollToIndex(index)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    width: "100%",
  },
  carousel: {
    maxHeight: "100%",
  },
  image: {
    width,
    height: "100%",
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 40,
    alignItems: "center",
    backgroundColor: "#000",
  },
  footerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

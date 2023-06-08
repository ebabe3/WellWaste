import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const KitchenList = () => {

    const navigation = useNavigation();

    data = [
        {
            id: 1,
            name: "Catering Restaurant",
            image: require("../assets/restaurantLogo.png"),
            productNumber: 54
        },  
        {
            id: 2,
            name: "Drew's Cafe",
            image: require("../assets/restaurantLogo2.png"),
            description: "Mutfak bilgileri",
            productNumber: 76
        },
        {
            id: 3,
            name: "Olive Garden",
            image: require("../assets/restaurantLogo3.png"),
            description: "Mutfak bilgileri",
            productNumber: 55
        },
        {
            id: 4,
            name: "Drew's Cafe",
            image: require("../assets/restaurantLogo2.png"),
            description: "Mutfak bilgileri",
            productNumber: 92
        },
        {
            id: 5,
            name: "Catering Restaurant",
            image: require("../assets/restaurantLogo.png"),
            description: "Mutfak bilgileri",
            productNumber: 55
        },
        {
            id: 6,
            name: "Drew's Cafe",
            image: require("../assets/restaurantLogo2.png"),
            description: "Mutfak bilgileri",
            productNumber: 90

        },
    ];

    const Item = ({ name, image, productNumber }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("KitchenProfile")}>
            <Image style={styles.image} source={image} />
            <View style={{ justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Stokta </Text>
                <Text style={{ fontSize: 17, color: "green" }}>{productNumber}</Text>
                <Text> ürün bulunmaktadır.</Text>
                </View>
            </View>
        </TouchableOpacity>
    );




    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 60, marginLeft: 30, color: 'gray'}}>Restaurants</Text>
            <FlatList   
                data={data}
                renderItem={({ item }) => <Item name={item.name} image={item.image} productNumber={item.productNumber} />} 
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    card: {
        borderRadius: 10,
        padding: 10,
        width: '90%',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        backgroundColor: '#fff',
        flexDirection : 'row',
        marginHorizontal: 20,
    },
    image: {
            width: 100,
            height: 100,
            borderRadius: 10,
            marginRight: 10,
    },
    
});

export default KitchenList;

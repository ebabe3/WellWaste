import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";

const KitchenProfile = () => {

    const navigation = useNavigation();

    data = [
        {
            id: 1,
            name: "Tabildot Yemek Menüsü 1",
            image: require("../assets/food.png"),
            description: "Muftak bilgileri",
            stock: "Stokta",
            stockNumber: 9,
        },
        {
            id: 2,
            name: "Tabildot Yemek Menüsü 2",
            image: require("../assets/food1.png"),
            description: "Muftak bilgileri",
            stock: "Stokta",
            stockNumber: 19,
        },
        {
            id: 3,
            name: "Tabildot Yemek Menüsü 3",
            image: require("../assets/food2.png"),
            description: "Muftak bilgileri",
            stock: "Stokta",
            stockNumber: 16,
        },
        {
            id: 4,
            name: "Tabildot Yemek Menüsü 4",
            image: require("../assets/food.png"),
            description: "Muftak bilgileri",
            stock: "Stokta",
            stockNumber: 2,
        },
    ];

    const Item = ({ name, image, stock, stockNumber }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Food")}>
            <Image style={{height: 100, width: 100,borderRadius: 10}} source={image} />
            <View style={{ justifyContent: "center", marginLeft: 20 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>{name}</Text>
                <Text style={{ fontSize: 11, color: "green" }}>{stock}</Text>
                <View style={{flexDirection : 'row'}}>
                <Text style={{ fontSize: 14, color: "gray" }}>Ürün adeti: </Text>
                <Text style={{ fontSize: 14, color: "green" }}>{stockNumber}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );




    return (
        <View>
            <View style={styles.header}>
                <Image source={require("../assets/restaurantLogo.png")} style={{ width: '100%', height: 290}} />
                <Text style={styles.name}>Catering Restaurant</Text>
            </View>
            <FlatList
                style={{ marginTop: 30 }}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Item
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        stock={item.stock}
                        stockNumber={item.stockNumber}
                    />
                )}
            />

        </View>
    );

};

const styles = StyleSheet.create({
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
    },
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        paddingTop: 10,
        paddingLeft: 10,
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10,
    },
    card: {
        borderRadius: 10,
        width: '90%',
        height: 100,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default KitchenProfile;
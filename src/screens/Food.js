import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";

const Food = () => {

    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", marginTop:60 }}>
                <Image source={require("../assets/food.png")} style={{ width: '90%', height: 290, borderRadius: 10 }} />
                <View style={{ marginTop: 20, width: '90%', height: 100, borderRadius: 10, padding: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 17, color: "black" }}>Tabildot Yemek Menüsü 1</Text>
                    <Text style={{ fontSize: 15, color: "green" }}>Stokta</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün adeti: 10</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün açıklaması</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün açıklaması</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün açıklaması</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün açıklaması</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün açıklaması</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    card: {
        marginTop: 20,
        width: '90%',
        height: 200,
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Food;
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const KitchenList = () => {

    const navigation = useNavigation();

    data = [
        {
            id: 1,
            name: "Mutfak 1",
            image: require("../assets/restaurantLogo.png"),
            description: "Mutfak bilgileri",
        },  
        {
            id: 2,
            name: "Mutfak 2",
            image: require("../assets/restaurantLogo2.png"),
            description: "Mutfak bilgileri",

        },
        {
            id: 3,
            name: "Mutfak 3",
            image: require("../assets/restaurantLogo3.png"),
            description: "Mutfak bilgileri",

        },
        {
            id: 4,
            name: "Mutfak 4",
            image: require("../assets/restaurantLogo2.png"),
            description: "Mutfak bilgileri",

        },
        {
            id: 5,
            name: "Mutfak 5",
            image: require("../assets/restaurantLogo.png"),
            description: "Mutfak bilgileri",

        },
        {
            id: 6,
            name: "Mutfak 6",
            image: require("../assets/restaurantLogo2.png"),
            description: "Mutfak bilgileri",

        },
    ];

    const Item = ({ name, image, description }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("KitchenProfile")}>
            <Image style={styles.image} source={image} />
            <View style={{ justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>{description}</Text>
            </View>
        </TouchableOpacity>
    );




    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 60, marginLeft: 30, color: 'gray'}}>Mutfaklarımız</Text>
            <FlatList   
                data={data}
                renderItem={({ item }) => <Item name={item.name} image={item.image} />}
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

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Button } from "../components/Button";

const Food = () => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}>
                <Image source={require("../assets/food.png")} style={{ width: '100%', height: 290, }} />
                <View style={{ marginTop: 20, width: '90%', height: 100, borderRadius: 10, padding: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black", fontWeight: '500' }}>Tabildot Yemek Menüsü 1</Text>
                    <Text style={{ fontSize: 15, color: "green" }}>Stokta</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Ürün adeti: 10</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: '500' }}>Sebzeli Mercimek Çorbası</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>Açıklama: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Sebzeli mercimek çorbası, leziz ve besleyici bir başlangıç yemeğidir. Bol miktarda sebze ve protein açısından zengin mercimek ile hazırlanan bu çorba, hem doyurucu hem de lezzetlidir. İçerdiği vitaminler ve lif açısından da sağlıklı bir seçenektir.</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>İçerik: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Kırmızı mercimek, soğan, havuç, patates, domates, biber, sarımsak, tuz, karabiber, kimyon, zeytinyağı.</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>Son Kullanma Tarihi: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>08.06.2023 (Bugün)</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5 }}>Isıtılma Durumu: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Çorba, taze olarak servis edildiğinde en iyi tat ve kıvamı sunar. Gerektiğinde hafifçe ısıtılarak servis edilebilir.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: '500' }}>Sebzeli Pilav</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>Açıklama: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Sebzeli pilav, leziz ve doyurucu bir seçenektir. İçerisinde bulunan çeşitli sebzeler, pilava zengin bir aroma ve besleyici değer katar. Bu basit ve lezzetli pilav, ana yemeklerle mükemmel bir uyum sağlar.</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>İçerik: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Uzun taneli pirinç, havuç, bezelye, mısır, soğan, sarımsak, tuz, karabiber, sıvı yağ.</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>Son Kullanma Tarihi: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>08.06.2023 (Bugün)</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5 }}>Isıtılma Durumu: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Pilav, taze olarak servis edildiğinde en iyi tat ve kıvamı sunar. Isıtıldığında da lezzetini korur. Gerektiğinde hafifçe ısıtılarak servis edilebilir.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: '500' }}>Mantar Sote</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>Açıklama: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Leziz mantarlar taze baharatlar ve özel sos ile sotelenmiştir. Mantar sote, hafif ve doyurucu bir seçenektir ve klasik bir lezzet sunar.</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>İçerik: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>İnce dilimlenmiş mantarlar, soğan, sarımsak, taze kekik, zeytinyağı, tuz, karabiber.</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5  }}>Son Kullanma Tarihi: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>08.06.2023 (Bugün)</Text>
                    <Text style={{ fontSize: 13, color: "gray", paddingTop: 5 }}>Isıtılma Durumu: </Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Mantar sote, taze olarak servis edildiğinde en iyi tadı verir. Gerektiğinde hafifçe ısıtılarak servis edilebilir.</Text>
                </View>
                <Button text="Sipariş Talep Et" color="#3ab3fd" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    card: {
        marginVertical: 10,
        width: '90%',
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
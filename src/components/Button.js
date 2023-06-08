import React, { useState } from "react";
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";

export const Button = ({ text, textColor, action, bg, border, disabled, style }) => {
    const [disabledButton, setDisabledButton] = useState(false);

    const handleButtonPress = () => {
        if (!disabledButton) {
            setDisabledButton(true);
            action && action();
        }
    };

    return (
        <View
            style={[
                styles.button,
                style,
                {
                    backgroundColor: disabled || disabledButton ? "#e3e5e8" : bg ? bg : "#3398ff",
                    borderColor: border ? border : bg === "white" || bg === "transparent" ? "#c0c2cc" : "transparent",
                },
            ]}
        >
            <TouchableOpacity
                onPress={handleButtonPress}
                disabled={disabled || disabledButton}
            >
                <Text
                    style={[
                        styles.textLabel,
                        {
                            color: textColor
                                ? textColor
                                : bg === "white" || bg === "transparent"
                                    ? "#47484f"
                                    : "white",
                        },
                    ]}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 17,
        marginVertical: 5,
        paddingHorizontal: 20,
        fontWeight: "bold",
    },
});

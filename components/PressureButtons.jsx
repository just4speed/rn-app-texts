import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PressureButtons = ({ pressure, scrollTop }) => {
    const dispatch = useDispatch();

    const switchPressure = () => {
        dispatch({
          type: 'CHANGE_PRESSURE'
        });
        scrollTop();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={switchPressure}
                disabled={pressure !== "low"}
                style={[
                    styles.canButton,
                    (pressure !== "low") && { borderColor: "#fff", }
                ]}
            >
                <Text
                    style={{ color: "#fff" }}
                >High Pressure Cans</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={switchPressure}
                disabled={pressure == "low"}
                style={[
                    styles.canButton,
                    (pressure == "low") && { borderColor: "#fff", }
                ]}
            >
                <Text
                    style={{ color: "#fff" }}
                >Low Pressure Cans</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp("2%"),
        marginBottom: 10
    },
    canButton: {
        backgroundColor : "#6C6C6C",
        borderWidth: 2,
        borderRadius: wp("5%"),
        elevation: 15,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('1%')
    },
})

export default PressureButtons;
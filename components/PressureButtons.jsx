import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PressureButtons = ({ pressure }) => {
    const dispatch = useDispatch();

    const switchPressure = () => {
        dispatch({
          type: 'CHANGE_PRESSURE'
        })
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
                >High Pressure</Text>
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
                >Low Pressure</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        marginBottom: 10
    },
    canButton: {
        backgroundColor : "#423f47",
        borderWidth: 2,
        borderRadius: wp("5%"),
        elevation: 15,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('1%')
    },
})

export default PressureButtons;
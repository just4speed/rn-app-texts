import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SaveButton = ({ data }) => {
    const dispatch = useDispatch();

    const saveGraffiti = () => {
        dispatch({
          type: 'SAVE_GRAFFITI',
          payload: {
            fillColor: data.fillColor,
            outlineColor: data.outlineColor,
            powerlineColor: data.powerlineColor,
            backgroundColor: data.backgroundColor,
            highlightColor: data.highlightColor,
    
            powerlines: data.powerlines,
            highlights: data.highlights
          }
        })
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={saveGraffiti} style={styles.saveBtn}>
                <Text>Save Scheme</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    saveBtn: {
        width: wp("40%"),
        borderRadius: wp("5%"),
        borderColor: "#fff",
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: hp('1%'),
        borderWidth: 2,
    }
})

export default SaveButton;
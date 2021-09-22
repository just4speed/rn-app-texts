import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeScheme = async (newObj) => {
    try{
        const jsonValue = await AsyncStorage.getItem('@schemes');
        const data = jsonValue != null ? JSON.parse(jsonValue) : [];
        const newData = data.concat([newObj]); // Fine
        AsyncStorage.setItem("@schemes", JSON.stringify(newData));
    } catch(e){
        console.log(e)
    }
}

const SaveButton = ({ data }) => {
    const dispatch = useDispatch();

    const saveGraffiti = () => {
        const newObj = {
            fillColor: data.fillColor,
            outlineColor: data.outlineColor,
            powerlineColor: data.powerlineColor,
            backgroundColor: data.backgroundColor,
            highlightColor: data.highlightColor,
    
            powerlines: data.powerlines,
            highlights: data.highlights
        }
        storeScheme(newObj);
        dispatch({
          type: 'SAVE_GRAFFITI',
          payload: newObj
        })
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={saveGraffiti} style={styles.saveBtn}>
                <Text style={{ color: "#fff" }}>Save Scheme</Text>
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
        backgroundColor: "#6C6C6C",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: hp('1%'),
        borderWidth: 2,
    }
})

export default SaveButton;
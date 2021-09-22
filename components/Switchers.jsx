import React from "react";
import { View, Switch, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Switchers = () => {
    const main = useSelector(state => state.main);
    const dispatch = useDispatch();
    
    const onChange = React.useCallback((actionType) => {
        dispatch({
            type: actionType
        })
    }, [main.powerlines, main.highlights])

    return(
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#6C6C6C",
                    width: wp("80%"),
                    paddingHorizontal: wp('5%'),
                    paddingVertical: hp('1%'),
                    borderRadius: wp("3%"),
                    marginBottom: hp("5%")
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#fff" }}>Power-line</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#3f51b5" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => onChange("SWITCH_POWERLINES")}
                        value={main.powerlines}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#fff" }}>Highlight</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#3f51b5" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => onChange("SWITCH_HIGHLIGHTS")}
                        value={main.highlights}
                    />
                </View>
            </View>
        </View>
    )
}

export default Switchers;
import * as React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import PressureButtons from "./PressureButtons.jsx";
import SaveButton from "./SaveButton.jsx";
import Switchers from "./Switchers.jsx";
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Settings = ({ scrollTop }) => {
    const main = useSelector(state => state.main);
    return(
        <>
            <Text
                style={{ textAlign: "center", marginVertical: hp("4%"), color: "#fff" }}
            >Settings</Text>
            <PressureButtons scrollTop={scrollTop} pressure={main.pressure} />
            <Switchers/>
            <SaveButton data={main}/>
        </>
    )
}

export default Settings;
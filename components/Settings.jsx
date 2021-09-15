import * as React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import PressureButtons from "./PressureButtons.jsx";
import SaveButton from "./SaveButton.jsx";
import Switchers from "./Switchers.jsx";
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Settings = () => {
    const main = useSelector(state => state.main);
    return(
        <>
            <Text
                style={{ textAlign: "center", marginVertical: hp("4%") }}
            >Settings</Text>
            <PressureButtons pressure={main.pressure} />
            <SaveButton data={main}/>
            <Switchers/>
        </>
    )
}

export default Settings;
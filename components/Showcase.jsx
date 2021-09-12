import * as React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GraffitiView from './GraffitiView.jsx';


const Showcase = () => {
    const main = useSelector(state => state.main);
    return(
        <SafeAreaView style={{ paddingVertical: hp('5%') }}>

            <View style={{ marginBottom: hp('15%') }}>
                
                <GraffitiView data={main} />

            </View>

        </SafeAreaView>
    )
}


export default Showcase;
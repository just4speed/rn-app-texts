import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GraffitiView = ({ data }) => (
    <>
        {/* Background */}
        <View style={[styles.over, { zIndex: 1 }]}>
            <Image style={[styles.layer, { tintColor: data.backgroundColor }]} source={ require('../assets/background.png') } />
        </View>
        {/* Powerline */}
        { data.powerlines && (
            <View style={[styles.over, { zIndex: 2 }]}>
                <Image style={[styles.layer, { tintColor: data.powerlineColor }]} source={ require('../assets/powerline.png') } />
            </View>
        )}
        {/* Fill */}
        <View style={[styles.over, { zIndex: 3 }]}>
            <Image style={[styles.layer, { tintColor: data.fillColor }]} source={ require('../assets/fill.png') } />
        </View>
        {/* Outline */}
        <View style={[styles.over, { zIndex: 4 }]}>
            <Image style={[styles.layer, { tintColor: data.outlineColor }]} source={ require('../assets/outline.png') } />
        </View>
        {/* Highlight */}
        { data.highlights && (
            <View style={[styles.over, { zIndex: 4 }]}>
                <Image style={[styles.layer, { tintColor: data.highlightColor }]} source={ require('../assets/highlights.png') } />
            </View>
        ) }

    </>
)

const styles = StyleSheet.create({
    layer: {
        width: wp('97%'), height: hp('15%')
    },
    over: {
        position: "absolute"
    }
})

export default GraffitiView;
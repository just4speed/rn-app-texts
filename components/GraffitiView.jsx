import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GraffitiView = ({ data }) => (
    <>
        {/* Background */}
        <View style={[styles.over, { zIndex: 1 }]}>
            <MaskedView
                maskElement={
                    <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/background.png') } />
                }
            >
                    <View style={[styles.layer, { backgroundColor: data.backgroundColor }]} />
            </MaskedView>
        </View>
        {/* Fill */}
        <View style={[styles.over, { zIndex: 2 }]}>
            <MaskedView
                maskElement={
                    <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/fill.png') } />
                }
            >
                <View style={[styles.layer, { backgroundColor: data.fillColor }]}>
                </View>
            </MaskedView>
        </View>
        {/* Powerline */}
        { data.powerlines && (
            <View style={[styles.over, { zIndex: 3 }]}>
                <MaskedView
                    maskElement={
                        <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/powerline.png') } />
                    }
                >
                    <View style={[styles.layer, { backgroundColor: data.powerlineColor }]} />
                    </MaskedView>
            </View>
        )}
        {/* Outline */}
        <View style={[styles.over, { zIndex: 4 }]}>
            <MaskedView
                maskElement={
                    <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/outline.png') } />
                }
            >
                    <View style={[styles.layer, { backgroundColor: data.outlineColor }]} />
            </MaskedView>
        </View>
        {/* Highlight */}
        { data.highlights && (
            <View style={[styles.over, { zIndex: 5 }]}>
                <MaskedView
                    maskElement={
                        <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/highlights.png') } />
                    }
                >
                    <View style={[styles.layer, { backgroundColor: data.highlightColor }]} />
                    </MaskedView>
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
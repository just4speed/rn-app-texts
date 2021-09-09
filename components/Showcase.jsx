import * as React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Showcase = () => {
    const main = useSelector(state => state.main);
    // resizeMode='cover' 
    // 5. highlights
    // 4. outline
    // 3. powerline
    // 2. fill
    // 1. background
    return(
        <SafeAreaView style={{ paddingVertical: hp('5%') }}>
            <View style={{ marginBottom: hp('15%') }}>
                <View style={[styles.over, { zIndex: 1 }]}>
                    <MaskedView
                        maskElement={
                            <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/background.png') } />
                        }
                    >
                        <View style={[styles.layer, { backgroundColor: main.backgroundColor }]} />
                    </MaskedView>
                </View>
                <View style={[styles.over, { zIndex: 2 }]}>
                    <MaskedView
                        maskElement={
                            <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/fill.png') } />
                        }
                    >
                        <View style={[styles.layer, { backgroundColor: main.fillColor }]}>
                        </View>
                    </MaskedView>
                </View>
                { main.powerlines && (
                    <View style={[styles.over, { zIndex: 3 }]}>
                        <MaskedView
                            maskElement={
                                <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/powerline.png') } />
                            }
                        >
                            <View style={[styles.layer, { backgroundColor: main.powerlineColor }]} />
                        </MaskedView>
                    </View>
                )}
                <View style={[styles.over, { zIndex: 4 }]}>
                    <MaskedView
                        maskElement={
                            <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/outline.png') } />
                        }
                    >
                        <View style={[styles.layer, { backgroundColor: main.outlineColor }]} />
                    </MaskedView>
                </View>
                { main.highlights && (
                    <View style={[styles.over, { zIndex: 5 }]}>
                        <MaskedView
                            maskElement={
                                <Image style={{width: wp('97%'), height: hp('15%')}} source={ require('../assets/highlights.png') } />
                            }
                        >
                            <View style={[styles.layer, { backgroundColor: main.highlightColor }]} />
                        </MaskedView>
                    </View>
                ) }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layer: {
        width: wp('97%'), height: hp('15%')
    },
    over: {
        position: "absolute"
    }
})

export default Showcase;
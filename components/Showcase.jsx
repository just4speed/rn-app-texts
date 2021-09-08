import * as React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Showcase = () => {
    const main = useSelector(state => state.main);
    // resizeMode='cover' 
    return(
        <SafeAreaView style={{ paddingVertical: hp('5%') }}>

                    <MaskedView
                        
                        maskElement={
                            <Image style={{width: wp('97%'), height: '100%', zIndex: 1}} source={ require('../assets/upfill.png') } />
                        }
                    >
                        <View style={{ width: wp('97%'), height: hp('15%'), resizeMode: "center", zIndex: 1, backgroundColor: main.fillColor }}>

                            <MaskedView
                                
                                maskElement={
                                    <Image style={{width: wp('97%'), height: '100%', zIndex: 2}} source={ require('../outline.png') } />
                                }
                            >
                                <View style={{ width: wp('97%'), height: hp('15%'), resizeMode: "center", zIndex: 2, backgroundColor: main.outlineColor }}>
                                </View>
                            </MaskedView>

                            </View>
                    </MaskedView>

        </SafeAreaView>
    )
}

export default Showcase;
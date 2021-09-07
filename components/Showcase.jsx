import * as React from 'react';
import { useSelector } from 'react-redux';
import { View, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

const Showcase = () => {
    const main = useSelector(state => state.main);
    // resizeMode='cover' 
    return(
        <View>
            <MaskedView
                resizeMode={'cover'}
                style={{ flex: 1 }}
                maskElement={
                    <Image
                        style={{
                            backgroundColor: main.fillColor,
                            zIndex: 1,
                            width: 300,
                            height: 210,
                            alignSelf: 'center',
                            position: 'fixed'
                        }}
                        resizeMode={'cover'}
                        source={require('../assets/upfill.png')}
                    />
                }
            >
                <Image style={{
                    zIndex: 2,
                    width: 300,
                    height: 210,
                    marginBottom: 15,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    position: 'fixed'
                }} source={require('../outline.png')} />
            </MaskedView>
        </View>
    )
}

export default Showcase;
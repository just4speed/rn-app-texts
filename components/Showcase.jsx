import * as React from 'react';
import { useSelector } from 'react-redux';
import { View, Image } from 'react-native';
import { MaskImageView } from 'react-native-mask-image';

const Showcase = () => {
    const main = useSelector(state => state.main);
    return(
        <View>
            <Image style={{
                width: 300,
                height: 210,
                marginBottom: 15,
                resizeMode: 'contain',
                alignSelf: 'center',
            }} source={require('../outline.png')} />
        </View>
    )
}

export default Showcase;
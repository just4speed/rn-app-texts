import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import Showcase from '../components/Showcase.jsx';
import ColorsColumn from '../components/ColorsColumn.jsx';

const Fill = () => {
  const main = useSelector(state => state.main);
  const dispatch = useDispatch();

  const onSelect = id => {
    dispatch({
      type: 'CHANGE_FILL',
      payload: id
    })
  }

  return (
    <View>
      <SafeAreaView>
        <Showcase/>
        <ScrollView>
          <View style={{ flexDirection: 'column', paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
              <ColorsColumn cb={onSelect} selectedColor={main?.fillColor} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};


export default Fill;
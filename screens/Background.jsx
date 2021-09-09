import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import Showcase from '../components/Showcase.jsx';
import ColorsColumn from '../components/ColorsColumn.jsx';

const Background = () => {
  const main = useSelector(state => state.main);
  const dispatch = useDispatch();

  const onSelect = id => {
    dispatch({
      type: 'CHANGE_BACKGROUND',
      payload: id
    })
  }

  return (
    <View>
      <SafeAreaView>
        <Showcase/>
        <ColorsColumn cb={onSelect} selectedColor={main?.fillColor} />
      </SafeAreaView>
    </View>
  );
};


export default Background;
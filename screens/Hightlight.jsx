import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Showcase from '../components/Showcase.jsx';
import ColorsColumn from '../components/ColorsColumn.jsx';

const Highlight = () => {
  const main = useSelector(state => state.main);
  const dispatch = useDispatch();

  const onSelect = id => {
    dispatch({
      type: 'CHANGE_HIGHLIGHT',
      payload: id
    })
  }

  return (
    <ScrollView style={{ backgroundColor: "#1C1C1C" }} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <Showcase/>
      <ColorsColumn cb={onSelect} selectedColor={main?.highlightColor} />
    </ScrollView>
  );
};


export default Highlight;
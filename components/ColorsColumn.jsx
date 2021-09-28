import * as React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, FlatList, SafeAreaView, View, StyleSheet } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Settings from './Settings.jsx';

import highPressure from '../data/high-pressure';
import lowPressure from '../data/low-pressure';


function Item({ item, selectedColor, cb }){
  return(
    <View style={{ alignItems: 'center',
      justifyContent: 'center', flex: 1, }}>
      <TouchableOpacity
        onPress={() => {
          cb(item.id);
        }}
        style={[
          styles.colorButton,
          { backgroundColor: item.id },
          item.id == selectedColor && styles.selected
        ]}></TouchableOpacity>
    </View>
  )
}

const ColorsColumn = ({ selectedColor, cb, scrollTop }) => {
  const main = useSelector(state => state.main);

  const renderItem = ({item}) => <Item item={item} selectedColor={selectedColor} cb={cb} />;
  const keyExtractor = (item) => item.id;


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#1C1C1C"}}>
          <FlatList
            style={{ flex: 1, paddingTop: 5 }}
            data={main.pressure == "high" ? highPressure : lowPressure}
            renderItem={renderItem}
            extraData={[selectedColor, cb]}
            keyExtractor={keyExtractor}
            numColumns={6}
            ListFooterComponent={<Settings scrollTop={scrollTop}/>} />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    colorButton: {
      width: wp("12%"),
      height: hp("5.5%"),
      margin: 5,
      borderRadius: wp("50%"),
      shadowColor: 'black',
      shadowOpacity: 0.5,
    },
    selected: {
      borderColor: "#ba44ff",
      borderWidth: 2
    }
})

export default ColorsColumn;


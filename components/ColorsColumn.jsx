import * as React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, FlatList, View, StyleSheet } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Settings from './Settings.jsx';

import highPressure from '../data/high-pressure';
import lowPressure from '../data/low-pressure';

// const storeGraffiti = async (value) => {
//   try {
//     await AsyncStorage.setItem('@storage_Key', value)
//   } catch (e) {
//     console.log(e)
//   }
// }
//

const ColorsColumn = ({ selectedColor, cb }) => {
  const main = useSelector(state => state.main);
  
  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

  const Item = ({ item }) => {
      return(
      <View style={{ alignItems: 'center',
        justifyContent: 'center', flex: 1, }}>
        <TouchableOpacity
          key={item.id}
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


  return (
      <View style={{ backgroundColor: "#fff" }}>

        <FlatList
          style={{ flex: 1, paddingTop: 5 }}
          data={formatData(main.pressure == "high" ? highPressure : lowPressure, 6)}
          renderItem={Item}
          keyExtractor={item => item.id}
          numColumns={6}
        />

        <Settings/>

      </View>
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
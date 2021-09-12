import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Text, ScrollView, FlatList, View, StyleSheet } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  const dispatch = useDispatch();

  React.useEffect(() => {
    //
  }, [main.pressure]);

  const switchPressure = () => {
    dispatch({
      type: 'CHANGE_PRESSURE'
    })
  }

  const saveGraffiti = () => {
    dispatch({
      type: 'SAVE_GRAFFITI',
      payload: {
        fillColor: main.fillColor,
        outlineColor: main.outlineColor,
        powerlineColor: main.powerlineColor,
        backgroundColor: main.backgroundColor,
        highlightColor: main.highlightColor,

        powerlines: main.powerlines,
        highlights: main.highlights
      }
    })
  }
  
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
      <ScrollView>

        <FlatList
          style={{ flex: 1, height: hp('50%') }}
          data={formatData(main.pressure, 5)}
          renderItem={Item}
          keyExtractor={item => item.id}
          numColumns={5}
        />

        <ScrollView>
          {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 40, marginVertical: 20 }}>
            <TouchableOpacity
              onPress={switchPressure}
              disabled={main.pressure[0].id !== "#fff9c3"}
              style={[
                styles.canButton,
                (main.pressure[0].id !== "#fff9c3") && { backgroundColor : "#000" }
              ]}
            >
              <Text
                style={{ color: (main.pressure[0].id !== "#fff9c3") ? "#fff" : "#000" }}
              >High Pressure</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={switchPressure}
              disabled={main.pressure[0].id == "#fff9c3"}
              style={[
                styles.canButton,
                (main.pressure[0].id == "#fff9c3") && { backgroundColor : "#000" }
              ]}
            >
              <Text
                style={{ color: (main.pressure[0].id == "#fff9c3") ? "#fff" : "#000" }}
              >Low Pressure</Text>
            </TouchableOpacity>

          </View> */}

          <TouchableOpacity onPress={saveGraffiti}>
            <Text>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    colorButton: {
      width: 45,
      height: 35,
      margin: 5,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.5,
    },
    selected: {
      borderColor: "#ba44ff",
      borderWidth: 2,
  
      elevation: 20,
    },
    canButton: {
      borderColor: "#000",
      borderWidth: 2,
      borderRadius: 5,
      paddingHorizontal: wp('5%'),
      paddingVertical: hp('1%')
    }
})

export default ColorsColumn;
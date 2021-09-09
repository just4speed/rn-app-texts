import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Switch, ScrollView, FlatList, View, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ColorsColumn = ({ selectedColor, cb }) => {
  const main = useSelector(state => state.main);
  const dispatch = useDispatch();

  const switchPressure = () => {
    dispatch({
      type: 'CHANGE_PRESSURE'
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

        <View>
          <View style={styles.container}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={main.pressure[0] == "#000000" ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={switchPressure}
              value={main.pressure[0] == "#000000"}
            />
          </View>
        </View>
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
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
})

export default ColorsColumn;
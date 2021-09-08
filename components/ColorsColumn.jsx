import * as React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import highPressure from '../data/high-pressure';
import lowPressure from '../data/low-pressure';

const ColorsColumn = ({ selectedColor, cb }) => {
    const main = useSelector(state => state.main);

    let pressure;
    switch(main.pressure){
      case 'high':
        pressure = highPressure;
        break;
      case 'low':
        pressure = lowPressure;
        break;
    }
    return pressure.map((item) => (
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
      ))
}

const styles = StyleSheet.create({
    colorButton: {
      width: 45,
      height: 35,
      margin: 5,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.5
    },
    selected: {
      borderColor: "#ba44ff",
      borderWidth: 2,
  
      elevation: 20,
    }
})

export default ColorsColumn;
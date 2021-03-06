import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GraffitiView from '../../components/GraffitiView.jsx';

const Saved = () => {
  const saved = useSelector(state => state.saved);
  const dispatch = useDispatch();

  const removeFromStorage = item => {
    const newData = saved.items.filter((graffiti) => {
      return graffiti !== item
    })
    AsyncStorage.setItem("@schemes", JSON.stringify(newData));
  }

  const SavedItem = ({ item }) => {
    const deleteItem = item => {
      dispatch({
        type: 'REMOVE_GRAFFITI',
        payload: item
      })
      removeFromStorage(item);
    }
    return(
      <View style={styles.savedCard}>
        <GraffitiView data={item}/>
        <View style={styles.colorItems}>
          <View style={[styles.colorCard, { backgroundColor: item.backgroundColor }]}></View>
          <View style={[styles.colorCard, { backgroundColor: item.fillColor }]}></View>
          { item.powerlines && (
            <View style={[styles.colorCard, { backgroundColor: item.powerlineColor }]}></View>
          ) }
          <View style={[styles.colorCard, { backgroundColor: item.outlineColor }]}></View>
          { item.highlights && (
            <View style={[styles.colorCard, { backgroundColor: item.highlightColor }]}></View>
          ) }
          <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteItem(item)}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: wp("5%") }}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return(
    <SafeAreaView style={{ height: hp("100%"), backgroundColor: "#1C1C1C" }}>
      <ScrollView>
      <View style={{ height: hp("5%") }} />
        <FlatList
          style={{ flex: 1 }}
          data={saved.items}
          renderItem={SavedItem}
        />
        <View style={{ height: hp("25%") }} />
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: wp('5%')
  },
  savedCard: {
    marginBottom: wp("3%"),
    paddingVertical: 40,
    flex: 1,
    alignItems: "center",
  },
  colorCard: {
    width: wp("9.5%"),
    height: hp("4.5%"),
    margin: 5,
    borderRadius: wp("50%"),
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent: "center", alignItems: "center"
  },
  colorItems: {
    display: "flex",
    flexDirection: "row",
    marginTop: hp("10%")
  },
  deleteBtn: {
    justifyContent: "center",
    marginLeft: 20
  }
})

export default Saved;
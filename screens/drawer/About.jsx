import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const About = () => {
  return(
    <SafeAreaView style={{ height: hp("100%"), backgroundColor: "#1C1C1C", paddingVertical: hp("3%"), paddingHorizontal: wp("7%") }}>
      <Text style={{ fontSize: wp("5%"), color: "#fff" }}>Writer was created as a result of the frustration you can get from choosing your colors.
The beginners within us know this pain, and the more advanced writers remember this pain for sure.
By having all the average shades in the professional paint industry, we can choose way faster, and not having a doubt about our choices.
</Text>
      <Text style={{ fontSize: wp("5%"), color: "#fff" }}>Writer will <Text style={{ fontWeight: "bold" }}>not</Text> save any of your data.</Text>
      <Text style={{ fontWeight: "bold", color: "#fff", paddingVertical: hp("3%"), fontSize: wp("5%") }}>writerapp@gmail.com</Text>
    </SafeAreaView>
  )
};

export default About;
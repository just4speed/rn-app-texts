import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Showcase from '../components/Showcase.jsx';
import ColorsColumn from '../components/ColorsColumn.jsx';

const Fill = () => {
    const dispatch = useDispatch();
    const main = useSelector(state => state.main);
    const scrollview = React.useRef();
    const onSelect = id => {
        dispatch({
            type: 'CHANGE_FILL',
            payload: id
        })
    }
    const scrollTop = () => {
        scrollview.current.scrollTo({ x: 0, y: 0, animated: true });
    }
    return(
        <ScrollView style={{ backgroundColor: "#1C1C1C" }} ref={scrollview} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <Showcase/>
                <View style={{ height: 20 }} />
                <ColorsColumn scrollTop={scrollTop} cb={onSelect} selectedColor={main?.fillColor} />
        </ScrollView>
    )
}

export default Fill;
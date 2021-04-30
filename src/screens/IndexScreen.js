import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ShapeColumn from '../components/ShapeColumn';

const IndexScreen = () => {

    let col_1 = [];
    let col_2 = [];
    let col_3 = []; 
    let col_4 = [];
    let col_5 = [];

    for(let i = 0; i < 5; i++) {
        col_1.push({value: Math.floor(Math.random()*30), index: i});
        col_2.push({value: Math.floor(Math.random()*30), index: i});
        col_3.push({value: Math.floor(Math.random()*30), index: i});
        col_4.push({value: Math.floor(Math.random()*30), index: i});
        col_5.push({value: Math.floor(Math.random()*30), index: i});
    }

    return(
        <View>
            <View style={styles.shapeColumn}>
                <ShapeColumn shapeValues={col_1}/>
                <ShapeColumn shapeValues={col_2}/>
                <ShapeColumn shapeValues={col_3}/>
                <ShapeColumn shapeValues={col_4}/>
                <ShapeColumn shapeValues={col_5}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shapeColumn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    }
});

export default IndexScreen;
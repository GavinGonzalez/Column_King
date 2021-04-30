import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const ShapeColumn = ({shapeValues}) => {

   
    return(
        
        <View>
        
            <FlatList
            data={shapeValues}
            keyExtractor={shape => shape.inedex}
            renderItem={({item}) => {

                if(item.value >= 0 && item.value < 10) {
                    return(
                        <View>
                            <Feather style={styles.square} name="square" size={30}/>
                        </View>
                    );
                }

                else if(item.value >= 10 && item.value < 20) {
                    return(
                        <View>
                            <Entypo style={styles.circle} name="circle" size={30}/>
                        </View>
                    );
                }

                else if(item.value >= 20 && item.value < 30) {
                    return(
                        <View>
                            <Feather style={styles.triangle} name="triangle" size={30}/>
                        </View>
                    );
                }

                
            }}
            />
            
        </View>
        
     
       
    );
};

const styles = StyleSheet.create({

    /*
    square: {
        backgroundColor: 'green'
    },

    circle: {
        backgroundColor: 'red'
    },

    triangle: {
        backgroundColor: 'blue'
    }
    */

});

export default ShapeColumn;
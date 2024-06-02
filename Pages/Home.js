import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import styles from '../assets/styles/stylesHome';
import { TextInput, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default Home=({navigation})=>{

    return(
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Home</Text>
                </View>
            </View>
        </ScrollView>
    )
}
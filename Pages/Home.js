import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import styles from '../assets/styles/stylesHome';
import { TextInput, FlatList } from 'react-native';


const data = [
    { id: '1', location: 'Hg3+QFJ, Laghouat' },
    { id: '2', location: 'Charchafa, Laghouat' },
    { id: '3', location: 'Al ghouati, Aflou' },
    { id: '4', location: 'RV93+QFJ, Kheng' },
    { id: '5', location: 'RV93+QFJ, Laghouat' },
    { id: '6', location: 'RV93+QFJ, Laghouat' },
    { id: '7', location: 'RV93+QFJ, Laghouat' },
    { id: '8', location: 'RV93+QFJ, Laghouat' },
    { id: '9', location: 'RV93+QFJ, Laghouat' },
    { id: '10', location: 'RV93+QFJ, Laghouat' },
  ];
export default Home=({navigation})=>{


  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = data.filter(item => item.location.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };
    return(
        <View style={styles.scrollContainer}>
            <View style={styles.topHead}>
            <View style={styles.appHead}>
                <View style={styles.appName}>
                    <Image style={styles.imgHead} source={require('../assets/LOGO.png')} />
                </View>
                <TouchableOpacity>
            <Image style={styles.imgHead} source={require('../assets/lens.png')} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Sign')}>
                <View style={styles.appName}>
                    <Image style={styles.imgHead} source={require('../assets/account.png')} />
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                    <TextInput style={styles.inputSearch}
                        value = {search}
                        placeholder="Search for pharmaciy"
                        placeholderTextColor="#929292"
                        onChangeText={handleSearch}
                        />
                    <TouchableOpacity>
                    <Image style={styles.searchImg} source={require('../assets/search.png')} />
                    </TouchableOpacity>
                </View>
                </View>
            <View style={styles.container}>
                
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                    <View style={styles.cntContent}>
                        <View style={styles.textElemnt}>
                        <Image style={styles.searchImg} source={require('../assets/location.png')} />
                        <Text style={styles.textLocation}>{item.location}</Text>
                        <TouchableOpacity style={styles.detailsBtn}>
                            <Image style={styles.searchImg} source={require('../assets/info.png')} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    )}
                    contentContainerStyle={styles.listContentContainer}
                />
            </View>
        </View>
    )
}
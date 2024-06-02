import {SafeAreaView, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from '../assets/styles/Styles';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function Login({ navigation }) {

  const [form, setForm]=useState({
    email:'',
    password:''
  })
  
  return (
    <ScrollView style={{flex:1, backgroundColor:'#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require('../assets/LOGO.png')}
          style={styles.headerImg}
          alt='logo'/>
          <Text style={styles.title}>LOGIN</Text>
          <Text style={styles.subTitle}>Login your account</Text>
        </View>
        {/* Forms */}
        <View style={styles.shadowBox}>
          {/* email */}
        <View style={styles.input}>
            <Text style = {styles.inputLabel}>Email address</Text>
            <TextInput style={styles.inputControl}
            value = {form.email}
            onChangeText={email => setForm({...form, email})} 
            placeholder="Enter your email"
            placeholderTextColor="#929292"
            />
        </View>
        {/* password */}
        <View style={styles.input}>
            <Text style = {styles.inputLabel}>Password</Text>
            <TextInput style={styles.inputControl}
            value = {form.password}
            onChangeText={password => setForm({...form, password})} 
            placeholder="Enter your password"
            secureTextEntry={true}
            placeholderTextColor="#929292"
            />
        </View>
        <View style={styles.fromAction}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.btn}>
              <Text style={styles.textBtn}>
                  LOGIN
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTitle}><Text style={styles.bottomTitle}>
          You don't have a account please </Text>
          <TouchableOpacity style={styles.btnLink} 
          onPress={() => navigation.navigate('Sign')}>
            <Text style={styles.bottomTitle}>Sign in</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cpRight}>
        <Text style={styles.bottomTitle}>
        All rights reserved  &copy;2024 | AppName | WebSite.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

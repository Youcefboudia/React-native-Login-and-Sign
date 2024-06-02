import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import styles from '../assets/styles/Styles';
import { TextInput, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Sign({ navigation }) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdate: new Date(),
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.birthdate;
    setShowDatePicker(Platform.OS === 'ios');
    setForm({ ...form, birthdate: currentDate });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/LOGO.png')}
            style={styles.headerImg}
            alt='logo' />
          <Text style={styles.title}>REGISTER</Text>
          <Text style={styles.subTitle}>Get this app in your hands and fully access</Text>
        </View>
        {/* Forms */}
        <View style={styles.shadowBox}>
          {/* First Name */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput style={styles.inputControl}
              value={form.firstname}
              onChangeText={firstname => setForm({ ...form, firstname })}
              placeholder="First Name"
              placeholderTextColor="#929292"
            />
          </View>
          {/* Last Name */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput style={styles.inputControl}
              value={form.lastname}
              onChangeText={lastname => setForm({ ...form, lastname })}
              placeholder="Last Name"
              placeholderTextColor="#929292"
            />
          </View>
          {/* Email */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput style={styles.inputControl}
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Enter your email"
              placeholderTextColor="#929292"
            />
          </View>
          {/* Birth Date */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Birth Date</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput style={styles.inputControl}
                value={form.birthdate.toDateString()}
                editable={false}
                placeholder="Select your birth date"
                placeholderTextColor="#929292"
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={form.birthdate}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          {/* Password */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Enter your password</Text>
            <TextInput style={styles.inputControl}
              value={form.password}
              secureTextEntry={true}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="Enter your password"
              placeholderTextColor="#929292"
            />
          </View>
          <View style={styles.fromAction}>
            <TouchableOpacity
              onPress={() => Alert.alert("Sign Up")}
            >
              <View style={styles.btn}>
                <Text style={styles.textBtn}>
                  SIGN IN
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomTitle}>
            <Text style={styles.bottomTitle}>I have an account </Text>
            <TouchableOpacity style={styles.btnLink}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.bottomTitle}>Login to your account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cpRight}>
          <Text style={styles.bottomTitle}>
            All rights reserved  &copy;2024 | AppName | WebSite.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

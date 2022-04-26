import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const SearchBar = ({search, onSetSearch, onSubmit}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.heading}>Weather Search</Text>
        <View style={styles.main}>
          <TextInput
            returnKeyType="search"
            style={styles.input}
            placeholder="Search for a city"
            value={search}
            onChangeText={val => onSetSearch(val)}
          />
          <TouchableOpacity
            color="#a065ec"
            style={styles.button}
            onPress={onSubmit}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    justifyContent: 'center',
  },
  container: {
    marginTop: 50,
    backgroundColor: '#f1f1f1',
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 40,
    fontFamily: 'Cochin-Bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#363636',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    flex: 3,
    marginLeft: 10,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    maxHeight: 35,
  },
});

export default SearchBar;

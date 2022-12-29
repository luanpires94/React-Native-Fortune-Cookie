import React, { useState } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { data } from './src/data/data.js'

const App = () => {

  const [image, setImage] = useState(require('./src/img/cookie.png'));
  const [phrase, setPhrase] = useState('')

  const changeImage = () => {
    if (image === require('./src/img/cookie.png')) {
      setImage(require('./src/img/open-cookie.png'));
    } else {
      setImage(require('./src/img/cookie.png'));
    }
  }

  const breakCookie = () => {
    let randomNum = Math.floor(Math.random() * data.length);

    setPhrase(data[randomNum]);
    changeImage();
  }

  const restartCookie = () => {
    setImage(require('./src/img/cookie.png'));
    setPhrase('')
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={image}
          alt="cookie"
        />
      </View>

      <View style={styles.ViewrWrap}>
        <Text style={styles.text}>{phrase}</Text>
      </View>

      <View style={styles.ViewrWrap}>
        <TouchableOpacity style={styles.buttonWrap} onPress={breakCookie}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Break Cookie</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonWrap, { marginTop: 15, borderColor: '#121212' }]} onPress={restartCookie}>
          <View style={styles.buttonContent}>
            <Text style={[styles.buttonText, { color: '#121212' }]}>Restart Cookie</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    color: '#dd7b22',
    width: 230,
    fontWeight: 'bold',
    marginTop: 60,
  },
  buttonWrap: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
  ViewrWrap: {
    flex: 1
  }
});

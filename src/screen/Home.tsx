import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>UXM <Text style={styles.text}>HOLDER</Text></Text>
      <SafeAreaView style={styles.body}>
        <TouchableOpacity style={styles.card}>
          <Text>CONNECTION</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    marginTop : 50,
    alignItems : "center",
  },
  body : {
    marginTop : 40
  },
  titleText : {
    fontWeight : 'bold',
    fontSize : 40,
  },
  text : {
    fontWeight : 'normal',
    fontSize : 40
  },
  card : {
    marginTop : 40,
    backgroundColor : 'white',
    height : 200,
    width : 200,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 20,
    shadowColor: '#000', // 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자 위치 조정
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 4, // 그림자 반경
  }
});

export default Home;
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../navigation/StackNavigator';
import { StackNavigations } from '../constants';

function Footer() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Left Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(StackNavigations.TICKET)}>
          <Text style={styles.icon}>🎫</Text>
          <Text style={styles.label}>예매내역</Text>
        </TouchableOpacity>

        {/* Center Button */}
        <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate(StackNavigations.SCAN)}>
          <Text style={styles.centerIcon}>📷</Text>
        </TouchableOpacity>

        {/* Right Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.label}>DID 관리</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 100, // 하단 메뉴 높이
    paddingHorizontal: 20,
    position: 'relative', // 가운데 버튼 배치를 위해 필요
  },
  button: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 24,
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  centerButton: {
    width: 70, // 가운데 버튼 크기
    height: 70,
    backgroundColor: '#007bff',
    borderRadius: 35, // 둥근 버튼
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40, // 하단 메뉴 위로 배치
    alignSelf: 'center',
    zIndex: 10, // 다른 요소 위에 배치
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  centerIcon: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Footer;

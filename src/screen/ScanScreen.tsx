import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

// QR Code 스캔 이벤트 데이터 타입 정의
interface QRCodeEvent {
  data: string; // 스캔된 QR 코드 데이터
  type: string; // QR 코드의 타입 (예: TEXT, URL 등)
}

function ScanScreen() {
  const scannerRef = useRef<QRCodeScanner>(null);

  // QR 코드 스캔 성공 시 처리 함수
  const onSuccess = (e: QRCodeEvent): void => {
    Alert.alert('QR Code Scanned', e.data, [
      { text: 'OK', onPress: () => scannerRef.current?.reactivate() }, // 스캐너 다시 활성화
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is Scan Screen</Text>
      <QRCodeScanner
        ref={scannerRef}
        onRead={onSuccess} // QR 코드 스캔 시 호출
        flashMode={RNCamera.Constants.FlashMode.off} // 플래시 비활성화 (off/on/auto)
        reactivate={true} // 스캔 후 다시 활성화 여부
        reactivateTimeout={2000} // 다시 활성화까지 대기 시간 (ms)
        showMarker={true} // QR 코드 영역 마커 표시
        markerStyle={styles.markerStyle} // 마커 스타일
        cameraStyle={styles.cameraStyle} // 카메라 스타일
        topContent={
          <Text style={styles.infoText}>
            QR 코드를 스캔하세요.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('직접 입력')}>
            <Text style={styles.buttonText}>직접 입력</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  markerStyle: {
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 10,
  },
  cameraStyle: {
    height: '70%',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ScanScreen;

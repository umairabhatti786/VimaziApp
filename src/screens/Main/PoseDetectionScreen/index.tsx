import { Camera, useCameraDevices } from 'react-native-vision-camera';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as posedetection from '@tensorflow-models/pose-detection';

export default function PoseDetectionScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [poses, setPoses] = useState([]);
  const devices:any = useCameraDevices();
  const device:any = devices.front;
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const status:any = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
      await tf.ready();
    })();
  }, []);

  const runPoseDetection = async (imageTensor:any) => {
    const detector = await posedetection.createDetector(
      posedetection.SupportedModels.MoveNet,
      { modelType: posedetection.movenet.modelType.SINGLEPOSE_LIGHTNING }
    );
    const pose:any = await detector.estimatePoses(imageTensor);
    setPoses(pose);
  };

  if (!device || !hasPermission) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Detected Poses: {poses.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 8,
  },
  text: { color: '#fff' },
});

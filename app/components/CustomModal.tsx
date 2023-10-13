import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import CommentIcon from '../assets/commentIcon';
import CrossIcon from '../assets/crossIcon';
import LikeIcon from '../assets/likeIcon';

interface ModalProps {
  visible: boolean;
  closeModal: any;
  item: any;
}

export default function CustomModal({visible, closeModal, item}: ModalProps) {
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={closeModal}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.btnStyle} onPress={closeModal}>
              <View style={styles.cross}>
                <CrossIcon />
              </View>
            </TouchableOpacity>
            <Image source={{uri: item?.largeImageURL}} style={styles.img} />
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignItems: 'center',
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <LikeIcon />
                <Text style={{marginHorizontal: 5}}>{item?.likes}</Text>
                <CommentIcon />
                <Text style={{marginHorizontal: 5}}>{item?.comments}</Text>
              </View>
              <View>
                <Text>views {item?.views}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  btnStyle: {
    width: 20,
    height: 20,
    top: 5,
    right: 30,
    position: 'absolute',
    paddingVertical: 10,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  cross: {width: 40, height: 40},
  img: {flex: 1, width: '100%', height: '100%', overflow: 'hidden'},
});

import React, { useState } from "react";
import { Text, View, Modal, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import ModalInput from "../ModalInput";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ProfileCard = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const navigation = useNavigation();
  const {userData} = useSelector((state) => state.userData);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setConfirmMessage("");
  };

  const toggleInputModal = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    const userCredentials = {
      email: userData.email,
      enteredPassword: oldPassword,
      newPassword: newPassword,
    };
    axios
     .put("http://192.168.56.1:5000/api/patient/changePassword", userCredentials)
     .then((res) => {
        console.log(res.data);
        setErrorMessage("");
        setConfirmMessage("Password updated successfully!");
      })
     .catch((err) => {
        console.log(err, userCredentials);
        setErrorMessage("Invalid old password!");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.information}>
        <View>
          <Text style={styles.infoText}>Age: {props.age}</Text>
          <Text style={styles.infoText}>Sex: {props.sex}</Text>
          <Text style={styles.infoText}>Weight: {props.weight}</Text>
          <Text style={styles.infoText}>Height: {props.height}</Text>
        </View>
        <View>
          <Text style={styles.infoText}>Your Doctor: {props.doctorName}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleInputModal}>
          <Text style={styles.buttonText}>Change Profile Picture</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Password</Text>
              {errorMessage && <Text style={{ color: 'red'}}>{errorMessage}</Text>}
              {confirmMessage && <Text style={{ color: 'white'}}>{confirmMessage}</Text>}
              <View style={styles.inputContainer}>
              <ModalInput
                placeholder="Old Password"
                value={oldPassword}
                onChangeText={setOldPassword}
                secureTextEntry={true}
              />
              <ModalInput
                placeholder="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
              />
              <ModalInput
                placeholder="New Password Again"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
              />
              </View>
              <TouchableOpacity style={styles.modalButton} onPress={handleSubmit}>
                <Text style={{ color: "#21252" }}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={toggleModal}
              >
                <Text style={{ color: "#21252" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          visible={inputModalVisible}
          transparent={true}
          onRequestClose={toggleInputModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Profile Picture</Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={pickImage}
                >
                  <Text style={{ color: "#21252" }}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={takePhoto}
                >
                  <Text style={{ color: "#21252" }}>Take Photo</Text>
                </TouchableOpacity>
              {selectedImage && (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.modalImage}
                />
              )}
              <TouchableOpacity style={styles.modalButton}>
                <Text style={{ color: '#21252' }}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={toggleInputModal}
              >
                <Text style={{ color: '#21252' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={styles.logOutButton} onPress={() => navigation.navigate('LoginStack')}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;

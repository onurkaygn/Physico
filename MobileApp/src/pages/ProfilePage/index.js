import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#e8e7de", "#a6cf97"]}
        style={styles.linearGradient}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />
        </View>
        <View style={styles.profileContainer}>
          <Text style={{ fontSize: 25, color: "#636363" }}>Profile</Text>
          <Image
            source={require("../../../assets/enes_profile.jpeg")}
            style={styles.profilePhoto}
          />
        </View>
        <View style={styles.profileCard_container}>
        <ProfileCard />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfilePage;
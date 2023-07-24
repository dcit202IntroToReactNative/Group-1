import React from "react";
import {
  ImageBackground,
  TextInput,
  Text,
  Image,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from "react-native";
import COLORS from "../Constants/colors";
import R_Button from "../components/radio_button";
import Login_Button from "../components/login_button";
import { Colors } from "react-native/Libraries/NewAppScreen";
        
export default function SignInComponent({navigation}) {
  return (
    <>
      <ImageBackground
        style={styles.background_image}
        source={require("../assets/loginbg_image.png")}
        resizeMode="cover"
      >
        <View style={styles.backgroundShadow} />
        <View style={styles.form}>
          <Text
            style={{
              fontSize: 45,
              fontWeight: 400,
              marginTop: 10,
            }}
          >
            Log In
          </Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />

          <View
            style={{
              width: "65%",
            }}
          >
            <R_Button label="remember me" />
          </View>
          <View >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text
          style={{
            fontSize: 25,
            color: COLORS.white,
          }}>LOG IN</Text>
        </TouchableOpacity>
        </View>
          <Pressable>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.white,
              fontSize: 20,
            }}
          >
            Don't have an account?
          </Text>
          <Pressable>
            <Text
              style={{
                fontWeight: 500,
                color: COLORS.blue,
                fontSize: 22,
              }}
            >
              Signup
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background_image: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  },
  backgroundShadow: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: COLORS.shadow,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    alignItems: "center",
    height: 700,
    width: "90%",
  },
  input: {
    height: 45,
    width: 250,
    borderRadius: 20,
    backgroundColor: COLORS.grey,
    paddingLeft: 90,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
    height: 45,
    width: 250,
    borderRadius: 20,
  },
});

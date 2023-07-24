import {
    Image,
    StyleSheet,
    View,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { Checkbox } from "react-native-paper";
  
  const SignUp = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <Image source={require("../assets/helpbg.png")} style={styles.image} />
        </View>
        <View style={styles.helpContainer}>
          <Text
            style={{
              fontSize: 40,
              color: "white",
              marginBottom: 20,
              textShadowColor: "black",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 4,
            }}
          >
            Sign up
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
  
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <TextInput style={styles.input} placeholder="Enter text..." />
            </View>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
  
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <TextInput style={styles.input} placeholder="Enter text..." />
            </View>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
  
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <TextInput style={styles.input} placeholder="Enter text..." />
            </View>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
  
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <TextInput style={styles.input} placeholder="Enter text..." />
            </View>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
  
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <TextInput style={styles.input} placeholder="Enter text..." />
            </View>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
  
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <TextInput style={styles.input} placeholder="Enter text..." />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              paddingVertical: 8,
              paddingHorizontal: 25,
              marginBottom: 50,
            }}
          >
            <Checkbox.Item label="" status="checked" />
            <Text style={{ color: "white", fontSize: 15 }}>
              By creating an account, you have agreed to the terms and conditions
              fo Prime
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 25,
              backgroundColor: "lightblue",
              borderRadius: 25,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <TouchableOpacity style={{ width: "100%" }}>
              <Text style={{ color: "black", textAlign: "center" }}>
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    helpContainer: {
      flex: 1,
      position: "absolute",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      fontSize: 18,
      padding: 6,
    },
  });
  
  export default SignUp;
  
import React, { useEffect, useState } from 'react';
import { Alert, AsyncStorage, Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import HiddenButton from "./components/HiddenButton";
import AppButton from "./components/AppButton";
import TextButton from "./components/TextButton";

export default function App() {
  const [count, setCount] = useState(0); //count default value is 0
  const [isOdd, setIsOdd] = useState(false);

  const countIncrementHandler = () => {
    if (count == 0) {
      Alert.alert("Wow! You found the button! 😅");
    }
    if (count == 20) {
      Alert.alert("I see you're still at it. 🧐");
    }
    setCount(count + 1);
    updateAsyncStorage(count + 1);
  };

  const countReset = () => {
    setCount(0);
    updateAsyncStorage(0);
    Alert.alert("Ninja?!");
  };

  function updateAsyncStorage(count) {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.removeItem("count");
        await AsyncStorage.setItem("count", JSON.stringify(count))
        return resolve(true);
      } catch (e) {
        return reject(e)
      }
    });
  }

  async function fetchCount() {
    const countStored = await AsyncStorage.getItem("count");

    if (countStored) {
      setCount(JSON.parse(countStored));
    }
  }

  useEffect(() => {
    fetchCount();
  }, []); //empty array will only update once otherwise it will update everytime something loads

  useEffect(() => {
    if (count % 2 == 0) {
      setIsOdd(true);
    } else {
      setIsOdd(false);
    }
  }, [count]); //if the count is changing then run the if else above

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Text style={styles.text}>{count}</Text> 
        <HiddenButton countReset={countReset} />
        <AppButton countIncrementHandler={countIncrementHandler} />
        <Text style={styles.text}>Which button will change the image?</Text>
      </View>

      <View style={styles.middleContainer}>
        <Image
          style={styles.image}
          source={
            isOdd
              ? require("./assets/images/sunglasses.png")
              : require("./assets/images/eyes.png")
          }
        />
      </View>

      <View style={styles.bottomContainer}>
        <Button title="Button|" onPress={() => Alert.alert("OOF Not me! 😣")} />
        <View style={styles.twoButtons}>
          <Button title="Button||" onPress={() => Alert.alert('👈🏻🎵 Left and')} />
          <Button title="Button|||" onPress={() => Alert.alert('Right 🎵👉🏻')} />
        </View>
        <TextButton />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: "#223",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    paddingBottom: 28,
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width - 50,
    height: 250,
    resizeMode: "cover",
  },
  text: {
    color: "#def",
    fontSize: 17,
  },
  twoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

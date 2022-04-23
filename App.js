import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState('');

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=Ice3hC7aoxDxtA8OhoGLFneQWHiP7Vqk`,
      );
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 300,
        }}>
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          MOVIE REVIEW
        </Text>
      </View>
      <Text>
        {data.map((val, index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {val.headline}
              </Text>
            </View>
          );
        })}
      </Text>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={text => setMovie(text)}
        placeholder="Enter Movie Name"
        value={movie}
      />
      <Button title="Get Movie" onPress={getMovie} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mov: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

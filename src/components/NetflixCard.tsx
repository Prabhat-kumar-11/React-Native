import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Gray Man</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri:
              'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQR6frZAoYNVvySbX_7fvp0Enk9CqZ7G5uVbFQgvnAfgKcdAKiN5QLvinvYJRtiCA-cyHHcMJOcNM46uFO74cLRWCw30bUJUu97bAGDZnL4Yn1jCFvi7DnxT82wQzg7hl-TpNAx55iVOQ8jLcSVScGjQC.jpg?r=d76',
          }}
        />
      </View>
      <Text style={styles.description}>
        A suspenseful thriller featuring an all-star cast. Watch as two elite assassins are hunted down in this action-packed movie.
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Watch Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: { width: '100%', aspectRatio: 1 },
  header: {
    fontSize: 30,
    marginBottom: 10,
    color: 'red',
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

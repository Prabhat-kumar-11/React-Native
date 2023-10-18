import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix card</Text>
      <View style={{backgroundColor: 'yellow'}}>
        <Image
          style={styles.imgStyle}
          source={{uri: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQR6frZAoYNVvySbX_7fvp0Enk9CqZ7G5uVbFQgvnAfgKcdAKiN5QLvinvYJRtiCA-cyHHcMJOcNM46uFO74cLRWCw30bUJUu97bAGDZnL4Yn1jCFvi7DnxT82wQzg7hl-TpNAx55iVOQ8jLcSVScGjQC.jpg?r=d76'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imgStyle: {width: '100%', aspectRatio: 1},
  header: {
    fontSize: 30,
    marginBottom: 20,
    color:"red"
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: 'center',
  },
});

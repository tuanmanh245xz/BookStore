import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {icons, COLORS, images, SIZES, FONTS} from '../../constants';


export default function Search() {
  return (
    <View
      style={styles.container}>
      <Text style={{fontSize: 40, color: 'white'}}>This is Search</Text>
      <TextInput placeholder='Search ...'
       placeholderTextColor={COLORS.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
});

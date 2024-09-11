import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {icons, COLORS, images, SIZES, FONTS} from '../../constants';

export default function SideMenu() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
      }}>
      <Text style={{fontSize: 40, color: 'white'}}>This is Side Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

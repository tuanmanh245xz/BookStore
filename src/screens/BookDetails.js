import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { ScrollView } from "react-native-virtualized-view";
import {icons, COLORS, images, SIZES, FONTS} from '../constants';

const LineDivider = () => {
  return (
      <View style={{ width: 1, height: 33 }}>
          <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
      </View>
  )
}

const BookDetails = ({route, navigation}) => {

  const {detailsData} = route.params;

  function BookInfo() {
    return(
      <View style={{flex: 1}}>

        {/* backgroung image section */}
        <ImageBackground 
        source={detailsData.bookCover}
        resizeMode = {"cover"}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        />

        {/* color overlay (color on top of background image) */}
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: detailsData.backgroundColor
        }}>

        </View>

        {/* navigation header section */}
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: SIZES.padding, marginTop: 19, justifyContent: 'space-between'}}>
          <TouchableOpacity
          onPress={()=> navigation.goBack()}>
            <Image 
            source={icons.backArrow}
            resizeMode={"contain"}
            style={{
              height: 25,
              width: 25,
              tintColor: detailsData.navTintColor
            }}
            />
          </TouchableOpacity>

          <Text style={{...FONTS.h3, color: detailsData.navTintColor, fontWeight: 'bold'}}>Details Book</Text>

          <TouchableOpacity onPress={()=> console.log("More Pressed")}>
            <Image 
            source={icons.more_icon}
            resizeMode = {"contain"}
            style={{
              width: 30,
              height: 30,
              tintColor: detailsData.navTintColor
            }}
            />
          </TouchableOpacity>
        </View>

        {/* book cover section */}
        <View style={{alignItems: 'center', paddingTop: 79}}>
          <Image 
          source={detailsData.bookCover}
          resizeMode = {"contain"}
          style={{
            borderRadius: 10,
            height: 250,
            width: 180
          }}
          />
        </View>

        {/* Book name and author name */}
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text style={{fontSize: 18, color: detailsData.navTintColor, fontWeight: 'bold'}}>{detailsData.bookName}</Text>
          <Text style={{...FONTS.body3, color: detailsData.navTintColor}}>{detailsData.author}</Text>
        </View>

        {/* Book Information section (rating, no of pages, language) */}
        <View style={{
          height: 80, 
          backgroundColor: "rgba(0,0,0,0.4)", 
          marginHorizontal: SIZES.padding, 
          marginTop: 23, 
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          // paddingHorizontal: 10

          }}>

            {/* Rating */}
          <View style={{alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white, fontWeight: 'bold'}}>{detailsData.rating}</Text>
            <Text style={{...FONTS.body4}}>Rating</Text>
          </View>
          
          <LineDivider />

           {/* Number of Pages */}
           <View style={{alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white, fontWeight: 'bold'}}>{detailsData.pageNo}</Text>
            <Text style={{...FONTS.body4}}>Pages</Text>
          </View>
          
          <LineDivider />

           {/* Language */}
           <View style={{alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white, fontWeight: 'bold'}}>{detailsData.language}</Text>
            <Text style={{...FONTS.body4}}>Language</Text>
          </View>
          
        </View>
      </View>

    )
  }

  // book description section
  function BookDescription() {
    return(
      <View style={{marginTop: 15, height: 150,}}>
        <Text style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}}>Description</Text>

        <ScrollView style={{ marginTop: 5}}>
          <Text style={{...FONTS.body2, color: "#727C81", fontSize: 16}}>{detailsData.description}</Text>
        </ScrollView>
      </View>
    )
  }

  // bottom buttons section
  function BottomButtons() {
    return(
      <View style={{marginHorizontal: SIZES.padding, flexDirection: 'row', }}>
        <TouchableOpacity style={{width: 53, height: 53, backgroundColor: COLORS.secondary, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
          <Image 
          source={icons.bookmark}
          resizeMode= {"contain"}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.lightGray2
          }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{height: 53, width: 300, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 13}}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return(
    <View style={{flex: 1, backgroundColor: COLORS.black}}>

      {/* Book information function  */}
      <View style={{flex: 4}}>
        {BookInfo()}
      </View>

      <View style={{paddingHorizontal: SIZES.padding, flex: 1.7}}>
        {BookDescription()}
      </View>

      {/* function for bottom buttons */}
      <View style={{bottom: 40}}>
        {BottomButtons()}
      </View>
    </View>
  )
}

export default BookDetails
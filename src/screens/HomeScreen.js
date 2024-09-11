import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList,  } from 'react-native';
import {icons, COLORS, images, SIZES, FONTS} from '../../constants';
import { ScrollView} from 'react-native-virtualized-view'

const LineDivider = () => {
  return (
    <View
      style={{
        width: 1,
        paddingVertical: 18,
        marginLeft: 10
      }}>
        <View style={{flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}>

        </View>
      </View>
  );
};

const headerData = {
  username: 'Batricia Salfiora',
  points: 240,
};

const  HomeScreen = ({navigation}) => {

  const bookOtherWordsForHome = {
    id: 3,
    bookName: "Other Words For Home",
    bookCover: images.banner_5,
    rating: 4.5,
    language: "Eng",
    pageNo: "341",
    author: "Jasmine Warga",
    genre: [
        "Romance", "Adventure",
    ],
    readed: "34k",
    description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000"
}

const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.banner_2,
    rating: 4.1,
    language: "Eng",
    pageNo: "272",
    author: "Seith Fried",
    genre: [
        "Romance", "Drama"
    ],
    readed: "5.2k",
    description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000"
}

const bookTheTinyDragon = {
    id: 1,
    bookName: "The Tiny Dragon",
    bookCover: images.banner_3,
    rating: 3.5,
    language: "Eng",
    pageNo: "160",
    author: "Rupert Carter",
    genre: [
        "Drama", "Adventure", "Romance"
    ],
    readed: "12.4b",
    description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,163,0.9)",
    navTintColor: "#FFF"
}

const bookUnderland = {
  id: 4,
  bookName: "Underland",
  bookCover: images.banner_4,
  rating: 4.9,
  language: "Eng",
  pageNo: "496",
  author: "Robert Macfarlane",
  genre: [
      "Adventure"
  ],
  readed: "78.9k",
  description: "In Underland, Robert Macfarlane delivers an epic exploration of the Earth’s underworlds as they exist in myth, literature, memory, and the land itself. Traveling through the dizzying expanse of geologic time—from prehistoric art in Norwegian sea caves, to the blue depths of the Greenland ice cap, to a deep-sunk 'hiding place' where nuclear waste will be stored for 100,000 years to come—Underland takes us on an extraordinary journey into our relationship with darkness, burial, and what lies beneath the surface of both place and mind.",
  backgroundColor: "rgba(119,77,143,0.9)",
  navTintColor: "#FFF"
}

const booksData = [
  {
    ...bookOtherWordsForHome,
    completion: '75%',
    lastRead: '3d 5h'

  },
  {
    ...bookTheMetropolis,
    completion: '23%',
    lastRead: '10d 5h',

  },
  {
    ...bookTheTinyDragon,
    completion: '48%',
    lastRead: '1d 2h'
  },
  {
    ...bookUnderland,
    completion: '89%',
    lastRead: '3d 6h'
  }

]

const booksCategories = [
  {
    id: 1,
    categoryName: 'Best Seller',
    books: [
      bookTheTinyDragon, bookOtherWordsForHome, bookTheMetropolis, bookUnderland 
    ]
  },
  {
    id: 2,
    categoryName: 'The Latest',
    books: [
       bookTheTinyDragon, bookUnderland,bookOtherWordsForHome
    ]
  },
  {
    id: 3,
    categoryName: 'Coming Soon',
    books: [
       bookTheMetropolis, bookTheTinyDragon
    ]
  },

]


  const [header, setHeader] = useState(headerData);
  const [myBooks, setMyBooks] = useState(booksData);
  const [categories, setCategories] = useState(booksCategories);
  const [selectedCategory, setSelectedCategory] = useState(1)

  // function for profile (name, greetings and points)
  function profile(header) {
    return (
      <View style={{paddingHorizontal: SIZES.padding, height: 90 }}>
        {/* Greetings */}
        <Text style={{...FONTS.h3, color: COLORS.white, marginTop: 20}}>
          Good Morning
        </Text>
        {/* name and points */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white, fontWeight: 'bold'}}>
            {header.username}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              height: 35,
              paddingLeft: 3,
              paddingRight: SIZES.radius,
              borderRadius: 20,
              width: 115
            }}
            onPress={() => console.log('Points')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  alignItems: 'center',
                  borderRadius: 25,
                }}>
                <Image
                  source={icons.cut_icon}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </View>
              <Text style={{color: COLORS.white}}>{header.points} point</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // function for buttons (claim, get point, my card)

  function buttons() {
    return (
      <View style={{ justifyContent: 'center', paddingHorizontal: SIZES.padding, height: 70, marginTop: 25,}}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Claim</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Get Point */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Get Point")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Get Point</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("My Card")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
  }

  // My Books section function
  function books() {

    const renderItem = ({item, index}) => {
      console.log(item);
      return(
        <TouchableOpacity 
        style={{ 
          marginLeft: index == 0 ? SIZES.padding : 0, 
          marginRight: SIZES.radius, 
          marginTop: 20}}
        onPress = {()=> navigation.navigate("Details", {detailsData: item})}>

          {/* book images */}
          <Image 
          source={item.bookCover}
          resizeMode= {"cover"}
          style={{width: 180, height: 250, borderRadius: 20}}
          />

          {/* book information section */}
          <View style={{marginTop: SIZES.radius, alignItems: 'center', flexDirection: 'row'}}>
            <Image 
            source={icons.clock_icon}
            resizeMode={'contain'}
            style={{
              width: 13,
              height: 13,
              tintColor: COLORS.lightGray
            }}
            />
            <Text style={{fontSize: 13, marginLeft: 5, color: COLORS.lightGray}}>{item.lastRead}</Text>

            <Image 
            source={icons.page_icon}
            resizeMode={'contain'}
            style={{
              width: 13,
              height: 13,
              tintColor: COLORS.lightGray,
              marginLeft: SIZES.radius
            }}
            />
            <Text style={{fontSize: 13, marginLeft: 5, color: COLORS.lightGray}}>{item.completion}</Text>

          </View>

        </TouchableOpacity>
      )
    }
    return(
      <View style={{paddingHorizontal: SIZES.padding,}}>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{...FONTS.h2, color: COLORS.white, fontWeight: 'bold'}}>My Books</Text>

          <TouchableOpacity
          onPress={() => console.log("see more")}>
            <Text style={{...FONTS.body3, color: COLORS.lightGray, textDecorationLine: 'underline'}}>see more</Text>
          </TouchableOpacity> 
        </View>

        <View>
          <FlatList 
          data={myBooks}
          renderItem = {renderItem}
          keyExtractor = {item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator = {false}
          />
        </View>
      </View>
    )
  }

  // function for books categories
function BooksCategoriesHeader() {

  const renderItem = ({item}) => {
    return(
      <TouchableOpacity
      style={{flex: 1, marginTop: 20, marginRight: SIZES.padding}}
      onPress= {() => setSelectedCategory(item.id)}>

        {/* here by default the selected category is at id 1 (in useState), when we press the buttons
        the setSelectedCategory updates to the pressed buttons id and updates the selected category
        to the newest pressed id. Below code when selectedCategory = selected id, the color is white
        while the rest of the buttons that are not selected, the color is light gray */}
        {
          selectedCategory == item.id &&
          <Text style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}}>{item.categoryName}</Text>
        }
        {
          selectedCategory != item.id &&
          <Text style={{fontSize: 18, color: COLORS.lightGray, fontWeight: 'bold'}}>{item.categoryName}</Text>
        }
        
      </TouchableOpacity>
    )
  }
  return(
    <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
      <FlatList 
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

function BooksCategories() {

  var books = []
  let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

  const renderItem = ({item}) => {
    return(

      // parent view conatining book cover, information and bookmarks button
      <View style={{paddingHorizontal: SIZES.padding}}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row', paddingVertical: SIZES.base}}
        onPress = {()=> navigation.navigate("Details", {detailsData: item})}>

          {/* book cover */}
          <Image 
            source={item.bookCover} 
            resizeMode = {'cover'}
            style={{
              width: 100,
              height: 150,
              borderRadius: 10
          }}/>

          {/* View for book information */}
          <View style={{paddingLeft: SIZES.radius, flex: 1}}>

            <View>
              <View style= {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.white}}>{item.bookName}</Text>
  
                <Image 
                source={icons.bookmark}
                resizeMode = "contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.lightGray,
                  // marginLeft: 75
                }}
                />
              </View>
              <Text style={{...FONTS.h3, color: COLORS.lightGray}}>{item.author}</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: SIZES.radius, alignItems: 'center'}}>
              <Image 
              source={icons.page_filled_icon}
              resizeMode = "contain"
              style={{
                width: 16,
                height: 16,
                tintColor: COLORS.lightGray,
                borderRadius: 5
              }}
              />
              <Text style={{paddingLeft: 3, paddingRight: 20, fontSize: 16, color: COLORS.lightGray}}>{item.pageNo}</Text>

              <Image 
              source={icons.read_icon}
              resizeMode = "contain"
              style={{
                width: 16,
                height: 16,
                tintColor: COLORS.lightGray,
              }}
              />

              <Text style={{paddingLeft: 3, fontSize: 16, color: COLORS.lightGray}}>{item.readed}</Text>

            </View>

            {/* Genre */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>

              {
                  item.genre.includes("Drama") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 35, borderRadius: 6 }}>
                      <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                  </View>
              }
                        
              {
                  item.genre.includes("Romance") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 35, borderRadius: 6 }}>
                      <Text style={{ ...FONTS.body3, color: COLORS.lightRed, }}>Romance</Text>
                  </View>
              }
              {
                  item.genre.includes("Adventure") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 35, borderRadius: 6 }}>
                      <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                  </View>
              }
                                
            </View>
          </View>

          
       </TouchableOpacity>
      </View>
      
    )
  }
  return(
    <View>
      <FlatList 
      data={books}
      renderItem={renderItem}
      keyExtractor = {item => `${item.id}`}
      showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}

  return (

    // main view
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      {profile(header)}
      {/* Claim, Get Point, My Card */}

      {buttons()}
      
      {/* book cover and information */}
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View>
          {books()}
        </View>

        {/* books categories and information  */}
        <View>
          <View>
              {BooksCategoriesHeader()}
          </View>
          <View>
            {BooksCategories()}
          </View>
        </View>
      
      </ScrollView>     
    </View>
  );
};

export default HomeScreen;

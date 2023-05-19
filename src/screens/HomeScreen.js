/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3BottomLeftIcon,
  HeartIcon,
  EyeIcon,
} from 'react-native-heroicons/outline';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listPostSelector, listProductSelector} from '../Redux/Selectors';
import CategoryData from '../mock-data/CategoryData';
import {ProductSlice} from '../Redux/ProductSlice';
import ProductSingleItem from '../Components/ProductSingleItem';
import PostData from '../mock-data/PostData';
import {PostSlice} from '../Redux/PostSlice';
const HomeScreen = ({navigation}) => {
  const listProduct = useSelector(listProductSelector);
  const listPost = useSelector(listPostSelector);
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-transparent mt-8">
      <View className="flex-1 px-4">
        {/* HEADER */}
        <View className="w-full h-16 flex-row items-center justify-between ">
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Bars3BottomLeftIcon color={'black'} size={32} />
          </TouchableOpacity>
          <View className="flex-row gap-x-4">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <MagnifyingGlassIcon color={'black'} size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Shopping Cart');
              }}>
              <ShoppingBagIcon color={'black'} size={32} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* CATEGORIES */}
          <View>
            <Text className="text-2xl font-bold">Categories</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={CategoryData}
              renderItem={({item}) => (
                <View className="items-center gap-y-2">
                  <TouchableOpacity
                    className="w-20 h-20 border-black 
                  border-0.5 p-3 rounded-full"
                    onPress={() => {
                      dispatch(
                        ProductSlice.actions.SET_CATEGORY_PRODUCT(item.id),
                      );
                      navigation.navigate('List Product');
                    }}>
                    <Image
                      source={{uri: item.image}}
                      resizeMode="contain"
                      className="w-full h-full "
                    />
                  </TouchableOpacity>
                  <Text className="font-medium">{item.name}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{marginTop: 20, columnGap: 20}}
            />
          </View>
          {/* BANNER */}
          <View
            style={{
              width: '100%',
              aspectRatio: 1,
              marginTop: 28,
            }}>
            <View>
              <Image
                source={{
                  // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQ4uyYrnXoQ1YOAyXpoZ7rkUZx-qfaJoI6g4VaIrtxGkLFVZfK4KdmGp8sAE9KC-_dmk&usqp=CAU',
                  uri: 'https://rematch.net/wp-content/uploads/2020/09/Nike-Sale-Banner-October-2020-1200-700.jpg',
                }}
                resizeMode="cover"
                className="w-full h-full rounded-2xl"
              />
            </View>
          </View>

          {/* CONTENT OPEN */}

          {/* NEW ARRIVAL */}
          <View className="mt-7">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl font-bold">New Arrivals</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    ProductSlice.actions.SET_VIEWALL_PRODUCT({
                      newArrival: true,
                    }),
                  );
                  navigation.navigate('View All');
                }}>
                <Text className="text-cyan-600/90 text-base">View all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={listProduct.filter(item => item.newArrival === true)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: width / 2,
                      height: 250,
                      borderWidth: 0.5,
                      borderColor: '#e9e9e9',
                      borderRadius: 12,
                    }}
                    onPress={() => {
                      dispatch(
                        ProductSlice.actions.SET_SELECTED_PRODUCT(item.id),
                      );
                      navigation.navigate('Product Details');
                    }}>
                    <ProductSingleItem {...item} />
                    <View
                      className="w-10 h-10 bg-white shadow absolute
                     rounded-full top-2 left-2 items-center justify-center">
                      <HeartIcon fill={'crimson'} color={'crimson'} size={22} />
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{marginTop: 28, columnGap: 20}}></FlatList>
          </View>
          {/* SALES */}
          <View className="mt-7">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-3">
                <Text className="text-red-500 text-2xl font-bold">
                  Hot Deals
                </Text>
                <View className=" bg-black/5 rounded-md">
                  <Text
                    className="text-black text-base font-semibold px-2 py-1 "
                    style={{letterSpacing: 1}}>
                    02:24:32s
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    ProductSlice.actions.SET_VIEWALL_PRODUCT({
                      saleStatus: true,
                    }),
                  );
                  navigation.navigate('View All');
                }}>
                <Text className="text-cyan-600/90 text-base">View all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={listProduct.filter(item => item.sale.status === true)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: width / 2,
                      height: 250,
                      borderWidth: 0.5,
                      borderColor: '#e9e9e9',
                      borderRadius: 12,
                    }}
                    onPress={() => {
                      dispatch(
                        ProductSlice.actions.SET_SELECTED_PRODUCT(item.id),
                      );
                      navigation.navigate('Product Details');
                    }}>
                    <ProductSingleItem {...item} />
                    {item.sale.status === true ? (
                      <View
                        className="w-10 h-10 bg-red-600 shadow absolute
                     rounded-full top-2 left-2 items-center justify-center">
                        <Text className="text-white text-lg font-bold">
                          {item.sale.salePercent}
                          <Text className="text-sm font-bold">%</Text>
                        </Text>
                      </View>
                    ) : (
                      <View
                        className="w-10 h-10 bg-white shadow absolute
                     rounded-full top-2 left-2 items-center justify-center">
                        <HeartIcon
                          fill={'crimson'}
                          color={'crimson'}
                          size={22}
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{marginTop: 28, columnGap: 20}}></FlatList>
          </View>

          {/* EXPLORE */}
          <View className="mt-7">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-3">
                <Text className="text-2xl font-bold">Explore</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    ProductSlice.actions.SET_VIEWALL_PRODUCT({
                      saleStatus: true,
                    }),
                  );
                  navigation.navigate('View All');
                }}>
                <Text className="text-cyan-600/90 text-base">View all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={listPost}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: width - 150,
                      height: 300,
                      borderWidth: 0.5,
                      borderColor: '#e9e9e9',
                      borderRadius: 12,
                    }}
                    // onPress={() => {
                    //   dispatch(
                    //     ProductSlice.actions.SET_SELECTED_PRODUCT(item.id),
                    //   );
                    //   navigation.navigate('Product Details');
                    // }}
                  >
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      resizeMode="cover"
                      className="w-full h-full rounded-xl "
                    />
                    <TouchableOpacity
                      className="bg-black/70 shadow shadow-white py-2 px-3 space-x-2
                       flex-row items-center justify-center 
                       rounded-full absolute bottom-5 left-2"
                      onPress={() => {
                        dispatch(PostSlice.actions.SET_SELECTED_POST(item.id));
                        // console.warn(item.id);
                        navigation.navigate('Post Details');
                      }}>
                      <Text className="font-bold text-white text-base">
                        See more
                      </Text>
                      <EyeIcon size={22} fill={'white'} color={'#333'} />
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{marginTop: 28, columnGap: 20}}></FlatList>
          </View>

          {/* CONTENT CLOSE */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

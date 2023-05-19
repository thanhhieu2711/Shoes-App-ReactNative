/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MagnifyingGlassIcon, XMarkIcon} from 'react-native-heroicons/outline';
import SearchItem from '../Components/SearchItem';
import {useDispatch, useSelector} from 'react-redux';
import {ProductSlice} from '../Redux/ProductSlice';
import {searchResult} from '../Redux/Selectors';

const SearchScreen = ({navigation}) => {
  const [searchData, setSearchData] = useState();

  const listSearch = useSelector(searchResult);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductSlice.actions.SEARCH_PRODUCT(searchData));
  }, [searchData]);

  return (
    <View className="flex-1 pt-5 px-5 gap-y-5 pb-8">
      <View
        className=" h-14 w-full flex-row items-center 
        space-x-3 bg-gray-200/70 px-6 rounded-xl">
        <MagnifyingGlassIcon color={'grey'} size={30} />
        <TextInput
          className="flex-1 text-base"
          placeholder="Search here"
          keyboardAppearance="dark"
          value={searchData}
          onChangeText={setSearchData}></TextInput>
        {searchData ? (
          <Pressable
            onPress={() => {
              setSearchData('');
            }}>
            <XMarkIcon color={'black'} size={28} />
          </Pressable>
        ) : null}
      </View>
      <FlatList
        data={listSearch}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              dispatch(ProductSlice.actions.SET_SELECTED_PRODUCT(item.id));
              navigation.navigate('Product Details');
            }}>
            <SearchItem {...item} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{rowGap: 40}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

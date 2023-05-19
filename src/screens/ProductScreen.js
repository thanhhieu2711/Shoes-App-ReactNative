/* eslint-disable react/self-closing-comp */
import {FlatList, Pressable, View} from 'react-native';
import React from 'react';
import ProductListItem from '../Components/ProductListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ProductSlice} from '../Redux/ProductSlice';
import {listCategoryProductSelector} from '../Redux/Selectors';
const ProductScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const listCategoryProduct = useSelector(listCategoryProductSelector);
  // const listViewAllProduct = useSelector(listViewAllProductSelector);

  return (
    <View>
      <FlatList
        data={listCategoryProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Pressable
            className=" w-6/12 p-1 "
            onPress={() => {
              dispatch(ProductSlice.actions.SET_SELECTED_PRODUCT(item.id));
              navigation.navigate('Product Details');
            }}>
            <ProductListItem imgUrl={item.image} />
          </Pressable>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 3,
          paddingBottom: 30,
        }}
        estimatedItemSize={5}></FlatList>
    </View>
  );
};

export default ProductScreen;

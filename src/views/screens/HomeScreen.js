/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import categories from '../../consts/categories';
import ListCategories from './ListCategories';
import Cards from './Cards';

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Ariz
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require('../../assets/person-u.jpg')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories
          categories={categories}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
          selectedCategoryIndex={selectedCategoryIndex}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Cards food={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

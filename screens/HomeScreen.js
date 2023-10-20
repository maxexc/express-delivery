import { View, Text, SafeAreaView, Image, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from '../components/FeatureRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "SEARCH",
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="bg-white pt-8 " >
        {/* Header */}
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri: "https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg",
                }}
                className="h-7 w-7 bg-gray-300 p-6 rounded-full"
            />          
            <View className="flex-1">
                  <Text className="font-bold text-gray-400 text-xs">
                      Deliver Now!
                  </Text>
                  <Text className="font-bold text-xl">
                      Current Location
                      <ChevronDownIcon size={20} color="#00CCBB" />
                  </Text>
            </View>
            <TouchableOpacity>
                <UserIcon size={35} color="#00CCBB" />                  
            </TouchableOpacity>
        </View>
        
        {/* Search */}
          <View
              className="flex-row items-center space-x-2 pb-2 mx-4"
          >
              <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded-lg" >
                  <MagnifyingGlassIcon color="#00CCBB" size={25} />
                <TextInput                    
                    placeholder='Restaurants and cuisines'
                    placeholderTextColor={'grey'}
                    style={{ 
                        fontSize: Platform.OS === 'ios' ? 19 : 18,
                    }}  
                    keyboardType='default'    
                />                
            </View>
            <TouchableOpacity>
                <AdjustmentsVerticalIcon color="#00CCBB" />                
            </TouchableOpacity>
        </View>
        
        {/* Body */}
        <ScrollView 
            className='bg-gray-100 flex-1'
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            {/* Categories */}
            <Categories />
            
            {/* Featured Rows */}
            <FeatureRow
                id="123" 
                title="Featured"
                description="Paid placement from our partenrs"
                featuredCategory="featured" 
            />
            
            {/* Tasty Discounts */}
            <FeatureRow 
                id="1234"
                title="Tasty Discounts"
                description="Everyone`s been enjoying these juicy discounts!"
                featuredCategory="featured" 
            />
            
            {/* Offers near you */}
            <FeatureRow 
                id="12345"
                title="Offers near you!"
                description="Why not support your local restaurant tonight?"
                featuredCategory="featured" 
            />              

        </ScrollView>
      {/* <Text className="text-red-500">HomeScreen</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen
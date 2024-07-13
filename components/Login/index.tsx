import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  return (
    <ThemedView className="bg-white">
      <Image
        style={{
          width: Dimensions.get('screen').width,
          height: 600,
          top: -120,
        }}
        resizeMode="contain"
        source={require('@/assets/images/login.png')}
      />
      <View className="space-y-14 justify-center shadow-xl bottom-[250] bg-white border-collapse p-8 rounded-t-[30]">
        <ThemedText type="title" className="text-center">
          AI Travel Planner
        </ThemedText>
        <ThemedText className="text-center text-gray-400">
          Explore effortlessly with our AI travel planner, providing
          personalized itineraries, real-time booking, and expert insights to
          make your trip unforgettable, while saving you time and money.
        </ThemedText>
        <TouchableOpacity
          onPress={() => router.push('auth/signIn')}
          className="bg-black  p-3 rounded-3xl"
        >
          <ThemedText className="text-white text-center">
            Get Started
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

import { View, Text, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TextField } from 'react-native-ui-lib';
import CustomTextFelid from '@/components/CustomTextFelid';
import { Controller } from 'react-hook-form';
import useSignState from './useSignState';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  const { control } = useSignState();
  const router = useRouter();
  return (
    <ThemedView className="p-8 py-10 ">
      <Ionicons name="arrow-back" size={24} onPress={() => router.back()} />

      <View className="space-y-1 mt-10 ">
        <ThemedText type="title">Let's Sign You In</ThemedText>
        <ThemedText type="subtitle">Welcome Back</ThemedText>
        <ThemedText type="subtitle">You have been missed</ThemedText>
      </View>
      <View className="space-y-10 mt-4">
        <View>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'This is Required',
            }}
            render={({ field: { onChange, value } }) => (
              <CustomTextFelid
                placeholder="Enter Email"
                label="Email"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'This is Required',
            }}
            render={({ field: { onChange, value } }) => (
              <CustomTextFelid
                placeholder="Enter Password"
                label="Password"
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => router.push('(tabs)')}
            className="bg-black  p-3 rounded-2xl"
          >
            <ThemedText className="text-white text-center">Sign In</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace('auth/signup')}
            className="border-black  border-[1px]  p-3 rounded-2xl"
          >
            <ThemedText className="text-black text-center">
              Create an Account
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

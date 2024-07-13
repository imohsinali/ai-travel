/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import PhoneInput from 'react-native-phone-number-input';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

interface CustomTextFieldProps extends TextInputProps {
  onChangeText?: (text: string) => void;
  value?: string | undefined;
  label?: string;
  placeholder?: string;
  multiLine?: boolean;
  isError?: boolean | any; // Allow any type
  errorMessage?: string | any;
  type?: string;
  variant?: 'outlined' | 'flat';
  right?: React.ReactNode;
  left?: React.ReactNode;
  inputMode?: 'text' | 'email' | 'numeric' | 'decimal' | 'tel' | 'url';
  secureTextEntry?: boolean;
  margin?: number;
}

const CustomTextFelid = ({
  onChangeText,
  value,
  label,
  placeholder,
  multiLine,
  isError,
  errorMessage = 'This is Required',
  type = 'text',
  variant = 'outlined',
  right,
  left,
  inputMode,
  secureTextEntry,
  margin = 2,
}: CustomTextFieldProps) => {
  const [focus, setFocus] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const mode = useColorScheme();
  return (
    <View>
      {label && (
        <ThemedText style={{ marginBottom: margin }}>{label}</ThemedText>
      )}
      {type == 'phone' ? (
        <View
          style={{
            borderColor: isError ? 'red' : focus ? 'purple' : '#1C1C1C',
            zIndex: 100,
            borderWidth:
              focus && variant !== 'flat' ? 1.6 : variant === 'flat' ? 0 : 1,
            width: 305,
            height: 58,
            position: 'relative',
            borderRadius: variant === 'flat' ? 0 : 4,
            borderBottomWidth: focus ? 1.6 : variant === 'flat' ? 0.6 : 1,
            // borderBottomColor: "grey",
          }}
        >
          <PhoneInput
            containerStyle={{
              // position: "absolute",
              // top: 60,

              backgroundColor: 'transparent',
              // width: 130,
              // backgroundColor: "#7CDB8A",
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowOffset: {
                width: 1,
                height: 10,
              },
              elevation: 0,
            }}
            textInputProps={{
              onFocus() {
                setFocus(true);
              },
              onBlur() {
                setFocus(false);
              },
            }}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="first"
            // onChangeText={onChangeText}
            onChangeFormattedText={onChangeText}
            flagButtonStyle={{
              // height: 30,
              // padding: -10,
              // borderColor: "red",
              // borderWidth: 1,

              backgroundColor: mode == 'dark' ? 'black' : 'white',
              elevation: 0,
            }}
            textInputStyle={{
              height: 24,
              backgroundColor: mode === 'dark' ? 'black' : 'transparent',
              color: mode === 'dark' ? 'white' : 'black',
              width: 0,
              marginRight: 30,
              paddingHorizontal: 0,
            }}
            codeTextStyle={{ color: mode === 'dark' ? 'white' : 'black' }}
            textContainerStyle={{
              backgroundColor: mode === 'dark' ? 'black' : 'transparent',
              paddingHorizontal: 0,
              width: 0,
            }}
            withShadow={false}
            renderDropdownImage={
              <Ionicons
                name="chevron-down"
                size={15}
                color={mode == 'dark' ? 'white' : 'black'}
              />
            }
            placeholder={placeholder}
          />
        </View>
      ) : (
        <TextInput
          style={{
            color: '#878787',
            width: 300,

            // marginLeft: -10,
            borderWidth: 1,
            paddingLeft: type === 'phone' ? 50 : 10,
            // paddingBottom: type === "phone" ? 4 : 0,
            height: multiLine ? 200 : 50,
            backgroundColor: mode === 'dark' ? 'black' : 'white',
            borderColor: isError ? 'red' : '#1C1C1C',

            borderRadius: 10,
          }}
          inputMode={type === 'phone' ? 'tel' : inputMode}
          numberOfLines={multiLine ? 100 : 1}
          multiline={multiLine}
          placeholder={placeholder}
          onChangeText={onChangeText}
          // onChange={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          // {...props}
        />
      )}
      {isError && (
        <ThemedText style={{ color: 'red' }}>{errorMessage}</ThemedText>
      )}
    </View>
  );
};

export default CustomTextFelid;

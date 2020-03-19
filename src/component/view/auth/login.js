
import React from 'react';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Button} from 'react-native';


import  TextView  from './styles';

const login = () => {
  return (
    <KeyboardAvoidingView style={TextView.containerView} behavior="padding">

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={TextView.loginScreenContainer}>
        <View style={TextView.loginFormView}>
        <Text style={TextView.mainText}>Login</Text>
          <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={TextView.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={TextView.loginFormTextInput} secureTextEntry={true}/>
          <Button
            buttonStyle={TextView.loginButton}
            title="Login"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default login;

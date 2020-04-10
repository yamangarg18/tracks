import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.container}> 
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
                onDidFocus={() => {}}
                onWillBlur={() => {}}
                onDidBlur={() => {}}
            />
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                routeName='Signup'
                text='Dont have an account? Sign up instead'
            />
        </View>

    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
      }
});

export default SigninScreen;
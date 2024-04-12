import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    MuseoModerno_600SemiBold,
    MuseoModerno_700Bold,
    MuseoModerno_800ExtraBold,
} from '@expo-google-fonts/museomoderno';
import { Jost_400Regular } from '@expo-google-fonts/jost';

const Loading = () => {
    let [fontsLoaded] = useFonts({
        MuseoModerno_600SemiBold,
        MuseoModerno_700Bold,
        MuseoModerno_800ExtraBold,
        Jost_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    let img = require("../assets/img/landing-img.png");

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F0FDFF', '#8B9DFF']} style={styles.background} />
            <View style={styles.headerContainer}>
                <MaskedView
                    maskElement={
                        <Text style={[styles.headerFont, { backgroundColor: 'transparent' }]}>
                            LOADING
                        </Text>
                    }>
                    <LinearGradient
                        colors={['#9CA0FF', '#005965']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>
                        <Text style={[styles.headerFont, { opacity: 0 }]}>
                            LOADING
                        </Text>
                    </LinearGradient>
                </MaskedView>
            </View>
            <View style={styles.subTextContainer}>
                <Image source={img} style={styles.image} />
                <Text style={styles.subText}>to your daily health goal</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In with Google</Text>
                </View>
            </View>
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    headerFont: {
        fontFamily: 'MuseoModerno_800ExtraBold',
        fontSize: 64,
        lineHeight: 60,
        color: '#005965',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        paddingTop: 24,
    },
    headerContainer: {
        width: 'fit-content',
        minHeight: 'fit-content',
        paddingTop: 80,
    },
    image: {
        width: 'fit-content',
        resizeMode: 'contain'
    },
    subTextContainer: {
        width: '72%',
    },
    subText: {
        fontFamily: 'Jost_400Regular',
        color: 'white',
        letterSpacing: .5,
        fontSize: 16,
        textAlign: 'right',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        paddingTop: 6,
        paddingRight: 6
    },
    buttonContainer: {
        height: '28%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#00365C'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Jost_400Regular',
    }
})
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import axios from 'axios'
import {
    useFonts,
    MuseoModerno_600SemiBold,
    MuseoModerno_700Bold,
    MuseoModerno_800ExtraBold,
} from '@expo-google-fonts/museomoderno';
import { Jost_400Regular } from '@expo-google-fonts/jost';

const GoalUpdate = () => {
    let { user } = useContext(AuthContext);
    const navigation = useNavigation();
    const [progress, setProgress] = useState({
        user: 0,
        screen_goal: 0,
        meditation_goal: 0,
        excercise_goal: 0,
        screen_time: 0,
        meditation_time: 0,
        excercise_time: 0
    })

    useEffect(() => {
        const getData = async () => {
            try {
                const userId = user.user_id
                console.log(user)
                const currentDate = new Date().toISOString().split('T')[0];
                const res = await axios.get(`http://localhost:8000/?user_id=${userId}&date=${currentDate}`);
                console.log(res.data)
                setProgress(res.data)
            } catch (error) {
                console.log("Error fetching user data", error)
            }
        };

        getData();
    }, [])

    let [fontsLoaded] = useFonts({
        MuseoModerno_600SemiBold,
        MuseoModerno_700Bold,
        MuseoModerno_800ExtraBold,
        Jost_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    // let icon = require("../assets/img/plus-icon.png");

    const navigateToDashboard = () => {
        navigation.navigate('Dashboard');
    };
    const handlePress = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/', progress)
            return response.data;
        } catch (error) {
            console.error('Error posting data: ', error);
            throw error;
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F0FDFF', '#8B9DFF']} style={styles.background} />
            <Text style={[styles.title, styles.jost]}>Let's update your goals</Text>
            <Text style={[styles.title, styles.jost]}>Screen time goal: {progress.screen_goal}</Text>
            <Text style={[styles.title, styles.jost]}>Excercise goal: {progress.excercise_goal}</Text>
            <Text style={[styles.title, styles.jost]}>Meditation goal: {progress.meditation_goal}</Text>
            <View style={styles.boxes}>
                {/* Screen time */}
                <View style={styles.box}>
                    <Text style={[styles.time, styles.jost]}>Screen time:</Text>
                    <View style={styles.input}>
                        <TextInput style={[styles.amount, styles.museo]}
                            onChangeText={(text) => {
                                if (/^\d+$/.test(text)) {
                                    const number = parseInt(text);
                                    const newValue = number >= 0 ? number : 0;
                                    setProgress(prevProgress => ({ ...prevProgress, screen_time: newValue }));
                                } else if (text === '') {
                                    setProgress(prevProgress => ({ ...prevProgress, screen_time: 0 }));
                                }
                            }}
                            value={progress.screen_time} />
                        <Text style={[styles.unit, styles.museo]}>hours</Text>
                    </View>
                </View>
                {/* exc time */}
                <View style={styles.box}>
                    <Text style={[styles.time, styles.jost]}>Exercise time:</Text>
                    <View style={styles.input}>
                        <TextInput style={[styles.amount, styles.museo]}
                            onChangeText={(text) => {
                                if (/^\d+$/.test(text)) {
                                    const number = parseInt(text);
                                    const newValue = number >= 0 ? number : 0;
                                    setProgress(prevProgress => ({ ...prevProgress, excercise_time: newValue }));
                                } else if (text === '') {
                                    setProgress(prevProgress => ({ ...prevProgress, excercise_time: 0 }));
                                }
                            }}
                            value={progress.excercise_time} />
                        <Text style={[styles.unit, styles.museo]}>hours</Text>
                    </View>
                </View>
                {/* med time */}
                <View style={styles.box}>
                    <Text style={[styles.time, styles.jost]}>Meditation time:</Text>
                    <View style={styles.input}>
                        <TextInput style={[styles.amount, styles.museo]}
                            onChangeText={(text) => {
                                if (/^\d+$/.test(text)) {
                                    const number = parseInt(text);
                                    const newValue = number >= 0 ? number : 0;
                                    setProgress(prevProgress => ({ ...prevProgress, meditation_time: newValue }));
                                } else if (text === '') {
                                    setProgress(prevProgress => ({ ...prevProgress, meditation_time: 0 }));
                                }
                            }}
                            value={progress.meditation_time} />
                        <Text style={[styles.unit, styles.museo]}>minutes</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Update</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default GoalUpdate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        height: '80%'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    jost: {
        fontFamily: 'Jost_400Regular',
        color: '#00365C'
    },
    museo: {
        fontFamily: 'MuseoModerno_800ExtraBold',
        color: '#00365C'
    },
    title: {
        marginTop: '5%',
        fontSize: 24
    },
    boxes: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 24
    },
    box: {
        paddingTop: 18,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        borderColor: 'white',
        borderWidth: .75,
        borderRadius: 12,
        margin: 12
    },
    amount: {
        fontSize: 32,
        marginLeft: 140,
        marginTop: 8,
        textAlign: 'right',
        //testing
        width: 75,
    },
    unit: {
        fontSize: 14,
        paddingTop: 29,
        paddingLeft: 5
    },
    buttonContainer: {
        height: '12%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 18,
        paddingRight: 18,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#00365C'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Jost_400Regular',
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        // paddingTop: 20
    }
});
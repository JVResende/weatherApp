import { Text, VStack } from "native-base";
import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import SearchInput from "../../components/inputs/SearchInput";
import { BASE_URL } from "../../constants";
import { ActivityIndicator } from "react-native";
import { Alert } from 'react-native'
import { WeatherInfo } from "../../components/weatherInfo";
import { LinearGradient } from 'expo-linear-gradient';

export function Home() {

    const [city, setCity] = useState('')

    const [weatherData, setWeatherData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)

    const fetchData = async (cityName) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}&q=${cityName}`)
            if (response.status == 200) {
                const data = await response.json()
                setWeatherData(data)
            } else {
                setWeatherData(undefined)
                Alert.alert("No city has been found.")
            }
            setIsLoading(false)
        } catch (error) {
            Alert.alert("Error", error.message)
        }

        setIsLoading(false)
    }


    return (
        <NativeBaseProvider>
            <LinearGradient
                colors={['#0d55ae', '#A9A9A9']}
                flex={1}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <VStack px={6} py={6} safeArea>
                    <SearchInput placeholder="Search city" value={city} onChangeText={(text) => { setCity(text) }} fetchData={fetchData} setCity={setCity} />

                    {isLoading && <ActivityIndicator color="black" size="large" />}
                    {!isLoading && weatherData && <WeatherInfo weatherData={weatherData} />}
                    {!isLoading && !weatherData && <Text color="#FFF" alignSelf="center" fontSize="md" mt={5} >Search for any city in the world above!</Text>}

                </VStack>
            </LinearGradient>
        </NativeBaseProvider>
    );
}
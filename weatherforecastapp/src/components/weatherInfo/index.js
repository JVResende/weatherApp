import { Box, Heading, HStack, Text, VStack, Image, Center } from "native-base";
import { EvilIcons, Ionicons, FontAwesome5, SimpleLineIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Card } from "../card";

export function WeatherInfo({ weatherData }) {

    return (
        <VStack mt={4} >

            <Center>
                <EvilIcons name="location" size={32} color="#FFF" />

                <Heading fontSize="2xl" fontWeight="bold" color="#FFF" >
                    {weatherData.location.name}
                </Heading>
                <Box flexDirection="row">
                    <Text fontSize="md" color="#FFF" >
                        {weatherData.location.region}/
                    </Text>
                    <Text fontSize="md" color="#FFF" >
                        {weatherData.location.country}
                    </Text>
                </Box>

                <HStack mt={2} alignItems="center">
                    <Ionicons name="ios-time-outline" size={18} color="black" />
                    <Text ml={1} alignSelf="flex-start" fontSize="md" color="black" >
                        {weatherData.location.localtime}
                    </Text>
                </HStack>

                <HStack alignItems="center" mt={4}>
                    <Text fontSize="7xl" fontWeight="medium" color="#FFF" >
                        {weatherData.current.temp_c.toFixed()}
                    </Text>
                    <Text fontSize="lg" color="#FFF" >
                        °C
                    </Text>
                </HStack>

                <HStack alignItems="center">
                    <FontAwesome5 name="temperature-high" size={14} color="black" />
                    <Text fontSize="md" ml={1} color="black" >
                        Feels Like {weatherData.current.feelslike_c.toFixed()}°C
                    </Text>

                </HStack>

                <HStack mt={4} alignItems="center" >
                    <Text fontSize="lg" color="#FFF" >
                        {weatherData.current.condition.text}
                    </Text>
                    <Image source={{ uri: `https:${weatherData.current.condition.icon}` }} alt="icon" size={24} ml={3} />
                </HStack>

                <HStack mt={5} w="100%" justifyContent="space-between" >
                    <Card icon={<SimpleLineIcons name="drop" size={34} color="black" />} title={'Humidity'} data={(weatherData.current.humidity) + '%'} />
                    <Card icon={<MaterialCommunityIcons name="weather-windy" size={34} color="black" />} title={'Wind'} data={(weatherData.current.wind_kph) + ' Km/h'} />
                </HStack>

                <HStack mt={5} w="100%" justifyContent="space-between" >
                    <Card icon={<MaterialIcons name="visibility" size={34} color="black" />} title={'Visibility'} data={(weatherData.current.vis_km) + ' Km'} />
                    <Card icon={<Ionicons name="rainy-outline" size={34} color="black" />} title={'Precipitation'} data={(weatherData.current.precip_mm) + ' mm'} />
                </HStack>

            </Center>
        </VStack>
    )

}
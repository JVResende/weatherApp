import { Box, Text, VStack } from "native-base";
import React from "react";

export function Card({ title, data, icon }) {

    return (
        <Box w="45%" p={2} borderRadius={5} bgColor="blue.100" justifyContent="center" alignItems="center">
            {icon}
            <VStack mt={2} alignItems="center">
                <Text fontSize="md" color="black"  >
                    {title}
                </Text>
                <Text fontSize="md" color="black"  >
                    {data}
                </Text>
            </VStack>
        </Box>
    )

}
import React from "react";
import { Icon, Input, Pressable } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchInput({ placeholder, value, onChangeText, fetchData, setCity }) {

    return (
        <Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            borderRadius="4"
            py="3"
            px="3"
            fontSize="md"
            mb={2}
            borderColor="gray.400"
            _focus={{
                bg: "blue.100",
                borderColor: "blue.400",
                borderWidth: 2
            }}
            onSubmitEditing={() => (fetchData(value), setCity(''))}
            InputRightElement={
                <Pressable onPress={() => (fetchData(value), setCity(''))}>
                    <Icon
                        m="2"
                        ml="3"
                        size="7"
                        color="gray.400"
                        as={<MaterialIcons name="search" />}
                    />
                </Pressable>}
        />
    );
}
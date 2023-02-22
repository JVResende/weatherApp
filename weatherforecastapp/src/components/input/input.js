import React from "react";
import { FormControl, Input as NBInput } from "native-base";

export default function Input({ label, placeholder, errorMessage, onChangeText, secureTextEntry }) {

    const invalid = !!errorMessage

    return (
        <FormControl mb={4} isRequired={true} isInvalid={invalid}>
            <FormControl.Label fontSize="md">{label}</FormControl.Label>
            <NBInput
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                placeholder={placeholder}
                h={16}
                fontSize="md"
                borderColor="gray.400"
                _focus={{
                    bg: "blue.100",
                    borderColor: "blue.400",
                    borderWidth: 2
                }}
                isInvalid={invalid}
                _invalid={{
                    borderColor: "red.500",
                    borderWidth: 2
                }}
            />
            <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl>

    );
}
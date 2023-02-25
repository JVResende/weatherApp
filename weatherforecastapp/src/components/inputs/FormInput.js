import React from "react";
import { FormControl, Icon, Pressable, Input } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export default function FormInput({ label, placeholder, errorMessage, onChangeText, passwordInput }) {

    const invalid = !!errorMessage

    const [show, setShow] = React.useState(false)

    return (
        <FormControl mb={4} isRequired={true} isInvalid={invalid}>
            <FormControl.Label fontSize="md">{label}</FormControl.Label>
            <Input
                placeholder={placeholder}
                onChangeText={onChangeText}
                fontSize="md"
                h={16}
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
                type={passwordInput && (show ? "text" : "password")}
                InputRightElement={passwordInput &&
                    <Pressable
                        onPress={() => setShow(!show)}>
                        <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                            size={5}
                            mr="2"
                            color="muted.400" />
                    </Pressable>}
            />
            <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl>

    );
}
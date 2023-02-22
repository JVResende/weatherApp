import React from "react";
import { VStack, Center, Button, Text } from "native-base";
import Input from "../../components/input/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login() {

    const logInSchema = yup.object({
        email: yup.string().required("Email is required.").email("Invalid email."),
        password: yup.string().required("Password is required.").min(6, "Invalid password.")
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(logInSchema)
    })

    const handleLogIn = (data) => {
        console.log(data)
    }

    return (
        <VStack bgColor="whitesmoke" flex={1} safeArea justifyContent="center" px={10}>
            <Center>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input
                            label="Email"
                            placeholder="email@email.com"
                            errorMessage={errors.email?.message}
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange } }) => (
                        <Input
                            label="Password"
                            placeholder="Must be at least 6 characters"
                            errorMessage={errors.password?.message}
                            secureTextEntry={true}
                            onChangeText={onChange}
                        />
                    )}
                />
                <Button
                    width="full"
                    h={16}
                    bg="blue.600"
                    _pressed={{
                        bgColor: "blue.800"
                    }}
                    onPress={handleSubmit(handleLogIn)}
                >
                    <Text
                        fontSize="md"
                        color="white"
                    >
                        Sign In
                    </Text>
                </Button>
            </Center>
        </VStack>
    );
}
import React from "react";
import { VStack, Center, Button, Text, Image } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import FormInput from "../../components/inputs/FormInput";
import logo from "../../../assets/logo.webp";


export function Login() {

    const navigation = useNavigation()

    const logInSchema = yup.object({
        email: yup.string().required("Email is required.").email("Invalid email."),
        password: yup.string().required("Password is required.").min(6, "Invalid password.")
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(logInSchema)
    })

    const handleLogIn = (data) => {
        console.log(data)
        navigation.navigate("home")
    }

    return (
        <NativeBaseProvider>
            <VStack bgColor="whitesmoke" flex={1} safeArea justifyContent="center" px={10}>
                <Image mb={16} source={logo} size={24} alt="logo" alignSelf="center" />
                <Center>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange } }) => (
                            <FormInput
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
                            <FormInput
                                label="Password"
                                placeholder="Must be at least 6 characters"
                                errorMessage={errors.password?.message}
                                onChangeText={onChange}
                                passwordInput={true}
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
        </NativeBaseProvider>
    );
}
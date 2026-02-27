import { View, Text, TextInput } from "react-native";

interface InputProps {
    label: string;
    onChangeText?: ((text: string) => void);
    placeholder: string;
    value: string;
}

export function Input({ label, onChangeText, placeholder, value }: InputProps) {
    return (
        <View className='py-2 gap-2'>
            <Text>{label}</Text>
            <TextInput
                keyboardType='numeric'
                value={value}
                onChangeText={onChangeText}
                className='border rounded-md bg-slate-200 px-4'
                placeholder={placeholder}
            />
        </View>
    )
}
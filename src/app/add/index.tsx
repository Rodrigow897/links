import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export function Add() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back-ios" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Novo
                </Text>
            </View>
        </View>
    );
}
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
    name: string;
    url: string;
    onDatails: () => void;
}

export function Link({name, url, onDatails}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
                <Text style={styles.url} numberOfLines={1}>
                    {url}
                </Text>
            </View>
            <TouchableOpacity onPress={onDatails}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
            </TouchableOpacity>
        </View>    
    );
}
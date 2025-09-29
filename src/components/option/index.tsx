import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    variant?: 'primary' | 'secondary';
    onPress?: () => void
}

export function Option({ name, icon, variant = 'primary', onPress, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialIcons 
            name={icon} 
            size={20} 
            color={variant === 'primary' ? colors.green[300] : colors.gray[400]} />

            <Text style={variant === 'primary' ? styles.primaryTitle : styles.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}
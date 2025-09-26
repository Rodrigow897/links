import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

import { Categories } from '@/components/categories';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo}
          source={require('@/assets/logo.png')}/>

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />
    </View>
  );
}
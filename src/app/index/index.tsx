import { colors } from '@/styles/colors';
import { categories } from '@/utils/catogories';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

import { Category } from '@/components/category';

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

      <Category 
        name={categories[0].name}
        icon={categories[0].icon}
        isSelected/>
      <Category name='Site' icon='language'isSelected={false}/>
      <Category name='Video' icon='movie' isSelected={false}/>
    </View>
  );
}
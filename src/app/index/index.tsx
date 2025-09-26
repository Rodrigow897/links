import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

import { Categories } from '@/components/categories';
import { Link } from '@/components/link';

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

      

      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={item => item}
        renderItem={()=> (
          <Link 
            name='Rocketseat' 
            url='https://rocketseat.com.br' 
            onDatails={() => console.log("clicou!")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
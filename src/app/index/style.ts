import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    paddingTop: 40,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38
  }
});
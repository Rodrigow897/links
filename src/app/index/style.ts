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
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    padding: 24,
    gap: 20,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[200],
  },
  modalLinkUrl: {
    fontSize: 14,
    color: colors.gray[400],
  }
});
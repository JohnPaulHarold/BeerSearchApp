import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;

export const SearchResultsStyles = StyleSheet.create({
  resultsList: {
    flex: 1,
    width: screenWidth
  }
});

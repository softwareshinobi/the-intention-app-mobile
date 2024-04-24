import { StyleSheet } from 'react-native';

export const solarizedDark = {
  base03: '#002B36', // Base 0 (background)
  base02: '#073642', // Base 1 (foreground)
  // ... other colors (optional)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 48,
    transform: [{ rotate: '90deg' }],
  },
});

export default styles;

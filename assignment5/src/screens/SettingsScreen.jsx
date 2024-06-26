import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#000',
    color: '#fff',
  },
};

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <Container>
        <View>
            <Text style={{fontSize: 20, fontWeight: 'semibold'}}>Settings</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}>Language</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}>My Profile</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}>Contact Us</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}>Change Password</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}>Privacy Policy</Text>
        </View>
        <View style={styles.themeContainer}>
          <Text style={styles.settingText}>Theme</Text>
          <Switch
            value={isDarkTheme}
            onValueChange={() => setIsDarkTheme((prev) => !prev)}
          />
        </View>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
`;

const styles = StyleSheet.create({
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
    color: '#000',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
  },
});

export default SettingsScreen;

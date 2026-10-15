import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';
import { ScreenProps } from '../types';

export default function RegisterScreen({ navigate }: ScreenProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header
        title="Регистрация"
        subtitle="Создайте учетную запись, чтобы продолжить!"
        onBack={() => navigate('login')}
      />

      <InputField
        icon="👤"
        placeholder="Ваше имя"
        value={name}
        onChangeText={setName}
      />
      <InputField
        icon="📞"
        placeholder="Номер телефона"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <InputField
        icon="🔒"
        rightIcon="👁"
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxRow}>
        <TouchableOpacity style={styles.checkbox}>
          <Text style={{ color: '#fff', fontSize: 12 }}>✓</Text>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          Создавая учетную запись, вы соглашаетесь с нашими{' '}
          <Text style={styles.link}>Условиями использования</Text>
        </Text>
      </View>

      <PrimaryButton title="Зарегистрироваться" onPress={() => navigate('city')} />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Уже есть аккаунт? </Text>
        <TouchableOpacity onPress={() => navigate('login')}>
          <Text style={styles.link}>Войти</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: { flex: 1, fontSize: 12, color: colors.text, lineHeight: 16 },
  link: { color: colors.primary, fontSize: 13, fontWeight: '600' },
  footerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerText: { color: colors.muted, fontSize: 13 },
});
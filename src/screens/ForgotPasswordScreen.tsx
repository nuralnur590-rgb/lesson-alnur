import React, { useState } from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { ScreenProps } from '../types';

export default function ForgotPasswordScreen({ navigate }: ScreenProps) {
  const [phone, setPhone] = useState('');

  return (
    <>
      <Header
        title="Восстановление пароля"
        subtitle="Введите свой номер телефона, чтобы восстановить пароль"
        onBack={() => navigate('login')}
      />
      <InputField
        icon="📞"
        placeholder="+7 (___) ___ __ __"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <PrimaryButton title="Продолжить" onPress={() => navigate('verify')} />
    </>
  );
}
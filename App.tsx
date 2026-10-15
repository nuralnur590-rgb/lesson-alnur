import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  ScrollView,
} from 'react-native';

// 1. БІРІНШІ БЕТ (Логин)
function LoginScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!phone.trim() || !password.trim()) {
      Alert.alert('Қате', 'Өтініш, барлық өрісті толтырыңыз!');
      return;
    }
    // Толтырылса, екінші бетке (парольді қайтаруға) өтеді
    onNavigate('forgotPassword');
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Привет, с возвращением!</Text>
      <Text style={styles.subtitle}>Войдите в свой аккаунт</Text>

      <TextInput
        style={styles.input}
        placeholder="Номер телефона"
        placeholderTextColor="#999"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.forgotBtn}
        onPress={() => onNavigate('forgotPassword')}
      >
        <Text style={styles.forgotText}>Забыли пароль?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.purpleButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>У вас нет аккаунта? </Text>
        <TouchableOpacity onPress={() => onNavigate('register')}>
          <Text style={styles.linkText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 2. ЕКІНШІ БЕТ (Парольді қайтару)
function ForgotPasswordScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (!phone.trim()) {
      Alert.alert('Қате', 'Телефон нөмірін енгізіңіз!');
      return;
    }
    onNavigate('verifyCode');
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('login')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Восстановление пароля</Text>
      <Text style={styles.subtitle}>
        Введите ваш номер телефона, чтобы восстановить пароль
      </Text>

      <TextInput
        style={styles.input}
        placeholder="+7 (700) 555-77-55"
        placeholderTextColor="#999"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.purpleButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// 3. ҮШІНШІ БЕТ (Кодты растау)
function VerifyCodeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('forgotPassword')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Подтвердить номер</Text>
      <Text style={styles.subtitle}>
        Код отправлен на номер +7 (700) 555-77-55
      </Text>

      <View style={styles.codeRow}>
        <View style={styles.codeBox}><Text style={styles.codeText}>7</Text></View>
        <View style={styles.codeBox}><Text style={styles.codeText}>8</Text></View>
        <View style={styles.codeBox}><Text style={styles.codeText}>5</Text></View>
        <View style={styles.codeBox}><Text style={styles.codeText}>4</Text></View>
      </View>

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('resetPassword')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// 4. ТӨРТІНШІ БЕТ (Жаңа пароль)
function ResetPasswordScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('verifyCode')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Сбросить пароль</Text>
      <Text style={styles.subtitle}>Пароль должен состоять из 8 символов</Text>

      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />
      <TextInput style={styles.input} placeholder="Повторите пароль" secureTextEntry />

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('login')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// 5. БЕСІНШІ БЕТ (Тіркелу)
function RegisterScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('login')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.subtitle}>Создайте учетную запись чтобы продолжить</Text>

      <TextInput style={styles.input} placeholder="Имя" />
      <TextInput style={styles.input} placeholder="Номер телефона" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('selectCity')}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// 6. АЛТЫНШЫ БЕТ (Қала таңдау)
function SelectCityScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('register')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.subtitle}>Выберите ваш город из списка</Text>

      <TextInput style={styles.input} placeholder="Выберите город" editable={false} />

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('login')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// БАСТЫ НАВИГАЦИЯ
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login': return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'forgotPassword': return <ForgotPasswordScreen onNavigate={setCurrentScreen} />;
      case 'verifyCode': return <VerifyCodeScreen onNavigate={setCurrentScreen} />;
      case 'resetPassword': return <ResetPasswordScreen onNavigate={setCurrentScreen} />;
      case 'register': return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'selectCity': return <SelectCityScreen onNavigate={setCurrentScreen} />;
      default: return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {renderScreen()}
    </SafeAreaView>
  );
}

// СТИЛЬДЕР (Figma макеті бойынша)
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  screenContainer: { flexGrow: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24, paddingTop: 20, justifyContent: 'center' },
  backButton: { marginBottom: 20, alignSelf: 'flex-start' },
  backArrow: { fontSize: 24, color: '#000000' },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', marginBottom: 6 },
  subtitle: { fontSize: 13, color: '#8E8E93', marginBottom: 24 },
  input: { height: 52, backgroundColor: '#F7F7F9', borderRadius: 12, paddingHorizontal: 16, fontSize: 15, color: '#000', borderWidth: 1, borderColor: '#EFEFEF', marginBottom: 16 },
  forgotBtn: { alignSelf: 'flex-end', marginBottom: 24 },
  forgotText: { color: '#8E24AA', fontSize: 13, fontWeight: '500' },
  purpleButton: { height: 52, backgroundColor: '#8E24AA', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  bottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  bottomText: { color: '#8E8E93', fontSize: 13 },
  linkText: { color: '#8E24AA', fontSize: 13, fontWeight: '600' },
  codeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, paddingHorizontal: 20 },
  codeBox: { width: 50, height: 50, borderRadius: 10, borderWidth: 1, borderColor: '#EFEFEF', backgroundColor: '#F7F7F9', justifyContent: 'center', alignItems: 'center' },
  codeText: { fontSize: 18, fontWeight: '700', color: '#000' },
 });
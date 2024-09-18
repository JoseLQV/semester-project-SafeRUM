import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
interface EditPageProps {
  setEditState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditPage({ setEditState }: EditPageProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSaveChanges = () => {
    console.log({ firstName, lastName, email, password });
  };

  const handleCancel = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setEditState(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={() => setEditState((prevState) => !prevState)}>
          <Image
              source={require('../assets/images/arrowLeft.png')}
              style={styles.arrowIcon}
              />
        </TouchableOpacity>    
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      {/* Profile Image Section */}
      <View style={styles.profileSection}>
        <Image source={require('../assets/images/no-profile.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Admin Name</Text>
        <Text style={styles.profileRole}>General Supervisor</Text>
      </View>

      {/* Input fields for profile info */}
      <View style={styles.inputSection}>
        <Text style={styles.fieldTitle}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.fieldTitle}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.fieldTitle}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.fieldTitle}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter New Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.passwordHint}>Password should be at least 8 characters</Text>
      </View>

      {/* Save and Cancel buttons */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F8F46', // green background
    paddingHorizontal: 20,
  },
  title: {
    position: 'relative',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    paddingVertical: 20,
  },
  profileHeader: {
    flexDirection: 'row',
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
    marginBottom: -10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '500',
    left: 5,
    marginTop: 8,
  },
  profileRole: {
    position: 'absolute',
    fontSize: 16,
    color: '#000',
    opacity: 0.5,
    marginVertical: 25,
    left: 60,
  },
  inputSection: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  passwordHint: {
    fontSize: 12,
    color: '#000',
    opacity: 0.50,
    marginBottom: 15,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 70,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  cancelText: {
    fontSize: 16,
    color: '#000',
  },
  saveText: {
    fontSize: 16,
    color: '#fff',
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  arrowIcon: {
    marginTop: 20,
    width: 36, 
    height: 28,
  },
});
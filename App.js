import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (text.trim() !== '') {
      setList([...list, text]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App 🔥</Text>

      <TextInput
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>

      {list.map((item, index) => (
        <Text key={index} style={styles.item}>• {item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    marginBottom: 5,
  },
});

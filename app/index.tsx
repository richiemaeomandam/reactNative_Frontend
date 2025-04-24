import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Switch,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = 'https://reactnative-backend.onrender.com';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [editId, setEditId] = useState<number | null>(null);

  const fetchTasks = async () => {
    try {
      let url = `${API_URL}/tasks/`;
      if (filter !== 'all') url += `?status=${filter}`;
      const res = await axios.get<Task[]>(url);
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const addOrUpdateTask = async () => {
    try {
      if (editId !== null) {
        const res = await axios.put<Task>(`${API_URL}/tasks/${editId}`, {
          title: task,
          completed: false,
        });
        setTasks(prev => prev.map(t => (t.id === res.data.id ? res.data : t)));
        setEditId(null);
      } else {
        const res = await axios.post<Task>(`${API_URL}/tasks/`, { title: task });
        setTasks(prev => [...prev, res.data]);
      }
      setTask('');
    } catch (err) {
      console.error('Error adding/updating task:', err);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const toggleComplete = async (task: Task) => {
    try {
      const res = await axios.put<Task>(`${API_URL}/tasks/${task.id}`, {
        title: task.title,
        completed: !task.completed,
      });
      setTasks(prev => prev.map(t => (t.id === res.data.id ? res.data : t)));
    } catch (err) {
      console.error('Error toggling completion:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.dark]}>
      <Text style={[styles.title, darkMode && styles.textLight]}>
        {darkMode ? '🌙' : '☀️'} To-Do List
      </Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.textLabel, darkMode && styles.textLight]}>
          {darkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      <View style={styles.filterContainer}>
        {['all', 'completed', 'pending'].map(f => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterButton,
              filter === f && styles.filterButtonSelected,
              darkMode && styles.filterButtonDark,
            ]}
            onPress={() => setFilter(f as any)}
          >
            <Text
              style={[
                styles.filterText,
                darkMode && styles.textDark,
                filter === f && styles.filterTextSelected,
              ]}
            >
              {f.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={[styles.input, darkMode && styles.inputDark]}
        placeholder="Enter task..."
        placeholderTextColor={darkMode ? '#aaa' : '#555'}
        onChangeText={setTask}
        value={task}
      />

      <TouchableOpacity
        style={[styles.button, darkMode ? styles.buttonDark : styles.buttonLight]}
        onPress={addOrUpdateTask}
      >
        <Text style={[styles.buttonText, darkMode ? styles.buttonTextDark : styles.buttonTextLight]}>
          {editId !== null ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <TouchableOpacity onPress={() => toggleComplete(item)} style={styles.checkboxContainer}>
              <Text style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
                {item.completed ? '✔️' : '⬜'}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.item,
                darkMode && styles.textLight,
                item.completed && styles.completed,
              ]}
            >
              {item.title}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => {
                setTask(item.title);
                setEditId(item.id);
              }}>
                <Text style={[styles.actionText, { color: '#2196f3' }]}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={[styles.actionText, { color: '#e91e63' }]}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#111',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textLabel: {
    fontSize: 16,
  },
  textLight: {
    color: '#fff',
  },
  textDark: {
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
  },
  inputDark: {
    borderColor: '#555',
    color: '#fff',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonLight: {
    backgroundColor: '#e91e63',
  },
  buttonDark: {
    backgroundColor: '#f8bbd0',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextLight: {
    color: '#fff',
  },
  buttonTextDark: {
    color: '#000',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#f8bbd0',
  },
  filterButtonDark: {
    backgroundColor: '#e91e63',
  },
  filterButtonSelected: {
    borderWidth: 2,
    borderColor: '#000',
  },
  filterText: {
    fontWeight: 'bold',
  },
  filterTextSelected: {
    textDecorationLine: 'underline',
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
    paddingVertical: 5,
  },
  item: {
    fontSize: 18,
    paddingVertical: 5,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  checkbox: {
    fontSize: 20,
  },
  checkboxChecked: {
    color: 'green',
  },
});

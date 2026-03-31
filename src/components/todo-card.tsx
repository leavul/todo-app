import type { TodoItem } from '@/store/use-todo-store';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TodoItemProps = {
    todo: TodoItem;
    onToggleCompleted: () => void;
    onEdit: () => void;
    onDelete: () => void;
}
export default function TodoCard({ todo, onToggleCompleted, onEdit, onDelete }: TodoItemProps) {
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.checkbox, todo.completed && styles.checkboxCompleted]}
                onPress={() => onToggleCompleted()}
            >
                {todo.completed && <FontAwesome5 name="check" size={12} color="black" />}
            </Pressable>

            <View style={styles.taskContent}>
                <Text style={[styles.title, todo.completed && styles.titleCompleted]}>{todo.title}</Text>

                <View style={styles.actionsContainer}>
                    <Pressable
                        style={[styles.actionButton, styles.editButton]}
                        onPress={onEdit}
                    >
                        <FontAwesome6 name="edit" size={16} color="#d4c158" />
                    </Pressable>

                    <Pressable
                        style={[styles.actionButton, styles.deleteButton]}
                        onPress={onDelete}
                    >
                        <FontAwesome6 name="trash" size={16} color="#d45f58" />
                    </Pressable>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2d2d2d',
        borderWidth: 1,
        borderColor: "#484848",
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 12,
        gap: 16,
    },
    taskContent: {
        gap: 24,
    },
    checkbox: {
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#484848',
        borderRadius: 10,
        backgroundColor: "#212121",
    },
    checkboxCompleted: {
        backgroundColor: "white",
        borderColor: "white",
    },
    title: {
        flex: 1,
        color: "white",
        fontSize: 18,
        fontWeight: "500",
        flexShrink: 1,
    },
    titleCompleted: {
        color: "#595959",
        textDecorationLine: "line-through",
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    actionButton: {
        height: 42,
        width: 42,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    editButton: {
        backgroundColor: "#3e3311",
    },
    deleteButton: {
        backgroundColor: "#3E1811",
    },
})

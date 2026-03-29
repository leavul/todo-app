import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TaskItem() {
    const isCompleted = false;

    return (
        <View style={styles.container}>
            <View style={styles.taskContent}>
                <Pressable
                    style={[styles.checkbox, isCompleted && styles.checkboxCompleted]}
                    onPress={() => { }}
                >
                    {isCompleted && <FontAwesome5 name="check" size={12} color="white" />}
                </Pressable>

                <Text style={[styles.title, isCompleted && styles.titleCompleted]}>Title</Text>
            </View>

            <View style={styles.actionsContainer}>
                <Pressable
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => { }}
                >
                    <FontAwesome6 name="edit" size={13} color="#d4c158" />
                </Pressable>

                <Pressable
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => { }}
                >
                    <FontAwesome6 name="trash" size={13} color="#d45f58" />
                </Pressable>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#212121",
        borderColor: "#2d2d2d",
        borderWidth: 1,
        padding: 16,
        margin: 16,
        borderRadius: 8,
    },
    taskContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    checkbox: {
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        borderColor: "#2d2d2d",
        borderWidth: 2,
        backgroundColor: "#212121",
    },
    checkboxCompleted: {
        backgroundColor: "#81d458",
        borderColor: "#81d458",
    },
    title: {
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
        height: 36,
        width: 36,
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
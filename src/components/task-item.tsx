import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TaskItem({ task }: { task: any }) {
    const isCompleted = task.isCompleted;

    return (
        <View style={styles.container}>
            <View style={styles.taskContent}>
                <Pressable
                    style={[styles.checkbox, isCompleted && styles.checkboxCompleted]}
                    onPress={() => { }}
                >
                    {isCompleted && <FontAwesome5 name="check" size={12} color="black" />}
                </Pressable>

                <Text style={[styles.title, isCompleted && styles.titleCompleted]}>{task.title}</Text>
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#2d2d2d',
        borderWidth: 1,
        borderColor: "#484848",
        padding: 16,
        paddingVertical: 24,
        borderRadius: 12,
    },
    taskContent: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
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
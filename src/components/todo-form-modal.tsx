import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

type TodoFormModalProps = {
    visible: boolean;
    title: string;
    inputValue: string;
    inputPlaceholder: string;
    onChange: (text: string) => void;
    onClose: () => void;
    onSubmit: () => void;
};

export default function TodoFormModal({
    visible,
    title,
    inputValue,
    inputPlaceholder,
    onChange,
    onClose,
    onSubmit,
}: TodoFormModalProps) {

    const handleSubmit = () => {
        if (inputValue.trim() === "") return;
        onSubmit();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <Pressable
                style={styles.overlay}
                onPress={onClose}
            >
                <KeyboardAvoidingView
                    style={styles.avoidingViewContainer}
                    behavior={'padding'}
                    keyboardVerticalOffset={24}
                >
                    <View style={styles.modal}>
                        <Text style={styles.title}>{title}</Text>
                        <TextInput
                            value={inputValue}
                            onChangeText={onChange}
                            placeholder={inputPlaceholder}
                            placeholderTextColor={"#595959"}
                            autoFocus
                            style={styles.input}
                        />

                        <View style={styles.actionButtonsContainer}>
                            <Pressable
                                style={[styles.actionButton, styles.cancelButton]}
                                onPress={onClose}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.actionButton, styles.submitButton]}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.submitButtonText}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Pressable>
        </Modal >
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    avoidingViewContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: "80%",
        backgroundColor: "#212121",
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 12,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    input: {
        marginTop: 24,
        backgroundColor: '#2d2d2d',
        borderWidth: 1,
        borderColor: "#484848",
        padding: 10,
        borderRadius: 8,
        color: "white",
    },

    actionButtonsContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 8,
    },

    actionButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },

    cancelButton: {
        backgroundColor: "#3E1811",
    },
    cancelButtonText: {
        color: '#e4a298',
    },

    submitButton: {
        backgroundColor: "#133e11",
    },
    submitButtonText: {
        color: '#a1e7a1',
    },
});
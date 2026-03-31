import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ModalShell from "./ui/modal-shell";

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

    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (!visible) {
            setShowError(false);
        }
    }, [visible]);

    const handleSubmit = () => {
        if (inputValue.trim() === "") {
            setShowError(true);
        } else {
            setShowError(false);
            onSubmit();
        }
    };

    const handleInputChange = (text: string) => {
        onChange(text);

        if (showError && text.trim() !== "") {
            setShowError(false);
        }
    };

    return (
        <ModalShell
            visible={visible}
            keyboardAware
            onRequestClose={onClose}
        >
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={[
                    styles.input,
                    showError && styles.inputError,
                ]}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder={inputPlaceholder}
                placeholderTextColor={"#595959"}
                autoFocus
            />

            {showError && (
                <Text style={styles.errorText}>Cannot be empty</Text>
            )}

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
        </ModalShell>
    );
}

const styles = StyleSheet.create({
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
    inputError: {
        borderColor: "#ff4444",
    },

    errorText: {
        color: "#ff4444",
        fontSize: 12,
        marginTop: 6,
        fontWeight: "500",
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
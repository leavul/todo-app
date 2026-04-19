import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type SectionCardProps = {
    backgroundColor?: string
    borderColor?: string

    title: string
    titleColor?: string,

    description: string,
    descriptionColor?: string,

    children: ReactNode
}
export default function SectionCard({
    backgroundColor = "#262626",
    borderColor = "#484848",

    title,
    titleColor = "#ffffff",

    description,
    descriptionColor = "#9e9e9e",

    children
}: SectionCardProps) {
    return (
        <View style={[styles.container, { backgroundColor, borderColor }]}>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                <Text style={[styles.description, { color: descriptionColor }]}>{description}</Text>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        gap: 16,
    },

    textContainer: {
        gap: 12
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    description: {
        fontSize: 14,
    },
})
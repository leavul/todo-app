import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type SectionCardProps = {
    size?: 'default' | 'compact'

    backgroundColor?: string
    borderColor?: string

    title: string
    titleColor?: string,

    description: string,
    descriptionColor?: string,

    children: ReactNode
}
export default function SectionCard({
    size = 'default',

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
                <Text style={[{ color: titleColor }, size === 'default' ? styles.title : styles.titleCompact]}>{title}</Text>
                <Text style={[{ color: descriptionColor }, size === 'default' ? styles.description : styles.descriptionCompact]}>{description}</Text>
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
    titleCompact: {
        fontSize: 16,
        fontWeight: "600",
    },

    description: {
        fontSize: 16,
    },
    descriptionCompact: {
        fontSize: 14,
    },
})
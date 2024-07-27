import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, padding, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
    if (!history || !history.length) return <Text style={styles.title}>Ce sur quoi nous sommes concentrés :</Text>;

    const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ce sur quoi nous sommes concentrés :</Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: padding.lg,
        flex:1,
    },
    item: {
        fontSize: fontSizes.lg,
        color: colors.white
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.lg,
        fontWeight: 'bold',
        padding: padding.xl
    },
});

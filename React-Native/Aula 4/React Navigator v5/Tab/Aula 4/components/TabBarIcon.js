import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function TabBarIcon(props) {
    let imgSrc = null;
    let badgeCount = 3;
    switch (props.name) {
        case 'TabHome':
            imgSrc = require('../img/a.png');
            badgeCount =0;
            break;
        case 'About':
            imgSrc = require('../img/ah.png');
            badgeCount = 3;
            break;
    }
    return (
        <View>
            <Image source={imgSrc} style={{ width: 24, height: 24 }} />
            { badgeCount > 0 &&
                <View style={styles.circle}>
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 15, height: 15,
        position: 'absolute',
        right: -6, top: -3,
        backgroundColor: 'red',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
    }
});

export default TabBarIcon;
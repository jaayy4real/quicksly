import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Modalize } from 'react-native-modalize';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchHistory from '../Componenta/SearchHistory';
import FullPage from './FullPage'; // Import the FullPage component

const MapScreen = () => {
  const modalizeRef = useRef(null);
  const [modalHeight, setModalHeight] = useState(Dimensions.get('window').height / 1);
  const [modalPosition, setModalPosition] = useState('top');
  const navigation = useNavigation();

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const markerCoordinate = {
    latitude: 5.0037,
    longitude: 7.8492,
  };

  const handleSearchPress = () => {
    // Trigger FullPage component when modalHeight is at 100%
    if (modalHeight === Dimensions.get('window').height) {
      navigation.navigate('FullPage');
    } else {
      // Otherwise, open the bottom sheet and set modalHeight to full height
      modalizeRef.current?.open();
      setModalHeight(Dimensions.get('window').height);
      setModalPosition('top');
    }
  };

  const handlePositionChange = (position) => {
    // Check if the bottom sheet is at the 'top' position
    if (position === 'top') {
      navigation.navigate('FullPage');
    }

    setModalPosition(position);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: markerCoordinate.latitude,
          longitude: markerCoordinate.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        <Marker
          coordinate={markerCoordinate}
          title="Marker Title"
          description="Marker Description"
        />
        <View>
          <Text>hi</Text>
        </View>
      </MapView>

      <Modalize
        ref={modalizeRef}
        handlePosition="inside"
        modalHeight={modalHeight}
        snapPoint={Dimensions.get('window').height / 4}
        alwaysOpen={Dimensions.get('window').height / 2.5}
        onPositionChange={handlePositionChange}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={styles.bottomSheet}>
          {modalPosition === 'top' && modalHeight < Dimensions.get('window').height ? (
            <Text style={{ fontSize: 20, marginTop: 20, color: 'green' }}>I love beans</Text>
          ) : null}
          {modalPosition === 'top' && modalHeight < Dimensions.get('window').height ? null : (
            <>
              <Text style={{ fontSize: 13 }}>Nice to see you!</Text>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>Where are you sending to?</Text>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.5,
                  shadowRadius: 3,
                  marginTop: '5%',
                }}
              >
                <TouchableOpacity style={styles.destination} onPress={handleSearchPress}>
                  <Feather name="search" size={24} color="black" style={{ alignSelf: 'center', padding: '3%', color: '#7C6DDD' }} />
                  <Text style={{ alignSelf: 'center', fontSize: 20 }}>Search Destination</Text>
                </TouchableOpacity>
              </View>

              <SearchHistory />
              <SearchHistory />
              <SearchHistory />
            </>
          )}
        </View>
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20,
  },
  destination: {
    width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
    flexDirection: 'row',
  },
});

export default MapScreen;

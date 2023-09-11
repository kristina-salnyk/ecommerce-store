import React, {FC, useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import {MainStackParamList} from '../../../navigation/types';
import getLocationByAddress from '../../../utils/getLocationByAddress';
import {MAP_REGION_DELTA} from '../../../constants/shared';
import {MapStyled} from './Map.styled';

const Map: FC = () => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 0,
    longitude: 0,
  });
  const route = useRoute<RouteProp<MainStackParamList, 'Map'>>();
  const {address} = route.params;

  useEffect(() => {
    getLocationByAddress(address).then(
      (location: Geocoder.LatLng | undefined) => {
        if (location) {
          setCoordinates({latitude: location.lat, longitude: location.lng});
        }
      },
    );
  }, [address]);

  return (
    <MapStyled
      region={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        ...MAP_REGION_DELTA,
      }}>
      <Marker coordinate={coordinates} title={address} />
    </MapStyled>
  );
};

export default Map;

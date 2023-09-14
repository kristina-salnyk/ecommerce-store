import Geocoder from 'react-native-geocoding';

const getLocationByAddress = async (
  address: string,
): Promise<Geocoder.LatLng | undefined> => {
  try {
    const response = await Geocoder.from(address);
    if (response.results) {
      return response.results[0].geometry.location;
    }
  } catch (error) {
    console.log('Error address geocoding: ', error);
  }
};

export default getLocationByAddress;

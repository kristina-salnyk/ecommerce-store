import SInfo from 'react-native-sensitive-info';

export const setItem = async (key: string, value: string) => {
  try {
    await SInfo.setItem(key, value, {
      keychainService: 'auth',
    });
  } catch (error) {
    console.log(`Error writing ${key} to storage: ${error}`);
  }
};

export const deleteItem = async (key: string) => {
  try {
    await SInfo.deleteItem(key, {keychainService: 'auth'});
  } catch (error) {
    console.log(`Error deleting ${key} from storage: ${error}`);
  }
};

export const getItem = async (key: string) => {
  try {
    return await SInfo.getItem(key, {keychainService: 'auth'});
  } catch (error) {
    console.log(`Error reading ${key} from storage: ${error}`);
  }
};

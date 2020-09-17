import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const scale = (unit: number) => {
  return unit * (width / 414)
}

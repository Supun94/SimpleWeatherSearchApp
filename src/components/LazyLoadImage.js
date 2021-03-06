import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

const LazyLoadImage = props => {
  const {width, height, imgUri} = props;
  const [loading, setLoading] = useState(true);

  return (
    <React.Fragment>
      {loading && <ActivityIndicator size={'small'} color="#FFA500" />}
      <FastImage
        onLoadEnd={() => {
          setLoading(false);
        }}
        style={{
          width: width,
          height: height,
        }}
        source={{
          uri: imgUri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </React.Fragment>
  );
};

export {LazyLoadImage};

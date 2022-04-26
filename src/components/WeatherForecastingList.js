import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {format, fromUnixTime} from 'date-fns';
import {LazyLoadImage} from './LazyLoadImage';

const WeatherForecastingList = ({data}) => {
  return (
    <ScrollView style={styles.container} onStartShouldSetResponder={() => true}>
      {data.list.map((result, index) => {
        return (
          <TouchableOpacity key={index} style={styles.rowButton}>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.headerTextWrapper}>
                  <Text style={styles.headerText}>
                    {index === 0
                      ? `Today, ${format(
                          fromUnixTime(new Date(result.dt)),
                          'PP',
                        )}`
                      : `${format(
                          fromUnixTime(new Date(result.dt)),
                          'EEEE',
                        )}, ${format(fromUnixTime(new Date(result.dt)), 'PP')}`}
                  </Text>
                </View>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Text style={styles.detailsText}>Details</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.section}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                  }}>
                  <Text style={[styles.mainConditionText, {marginLeft: 10}]}>
                    {result.weather[0].main}
                  </Text>
                  <Text style={[styles.detailConditionText, {marginLeft: 10}]}>
                    {result.weather[0].description}
                  </Text>
                </View>
                <View style={styles.tempWrapper}>
                  <LazyLoadImage
                    width={90}
                    height={90}
                    imgUri={`https://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
                  />
                  <View style={{paddingLeft: 2}}>
                    <Text style={styles.otherConditionText}>
                      Avg: {result.main.temp} °C
                    </Text>
                    <Text style={styles.otherConditionText}>
                      Max: {result.main.temp_max} °C
                    </Text>
                    <Text style={styles.otherConditionText}>
                      Min: {result.main.temp_min} °C
                    </Text>
                    <Text style={styles.otherConditionText}>
                      Humidity: {result.main.humidity} %
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    height: 150,
  },
  tempDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  cardWrapper: {
    marginBottom: 10,
    height: 150,
    alignSelf: 'stretch',
  },
  tempWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',
  },
  grid3: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    height: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextWrapper: {
    backgroundColor: 'orange',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  iconWrapper: {
    width: 100,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  detailsText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'Cochin',
  },
  headerText: {
    color: 'black',
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'Cochin',
  },
  mainConditionText: {
    color: 'black',
    fontSize: 22,
    lineHeight: 22,
    fontFamily: 'Cochin-Bold',
    marginTop: 22,
  },
  detailConditionText: {
    color: 'black',
    fontSize: 16,
    lineHeight: 14,
    fontFamily: 'Cochin',
    marginTop: 5,
  },
  otherConditionText: {
    color: 'black',
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'Cochin',
    marginTop: 5,
  },
  tempImg: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  image: {
    width: 70,
    height: 60,
    alignContent: 'center',
  },
});

export default WeatherForecastingList;

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const DetailScreen = ({ route }) => {
  const [datos, setDatos] = useState([]);
  const [datosCargados, setDatosCargados] = useState(false);
  const { lat, lon } = route.params;

  useEffect(() => {
    const key = "16d3374be7d74982724102c96d08327a";
    const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${key}&units=metric`;
    fetch(api_url)
      .then((data) => {
        return data.json();
      })
      .then((resultado) => {
        setDatos(resultado);
        setDatosCargados(true);
      })
      .catch((e) => {
        setDatosCargados(false);
      });
  }, []);
  const createDate = (dt, i) => {
    if (i === 0) {
      return "Hoy";
    } else {
      var day = new Date(dt * 1000);
      return day.toLocaleString("es-mx", { weekday: "long" }).toUpperCase();
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {datosCargados ? (
          datos.daily.map((e, i) => {
            return (
              <Card
                containerStyle={{
                  width: "100%",
                }}
                key={i}
              >
                <Card.Title>{createDate(e.dt, i)}</Card.Title>
                <Card.Divider />
                <View>
                  <Text>Temperatura promedio: {e.temp.day}°C</Text>
                  <Text>Minima: {e.temp.min}°C</Text>
                  <Text>Maxima: {e.temp.max}°C</Text>
                </View>
              </Card>
            );
          })
        ) : (
          <Text style={styles.texto2}>Cargando....</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
  },
  images: {
    width: 200,
    height: 300,
    margin: 5,
    alignSelf: "center",
  },
  texto: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  texto2: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
    margin: 10,
  },
});

export default DetailScreen;

import { View, Dimensions, StyleSheet } from 'react-native'
import { LineChart } from "react-native-chart-kit"


const MoodGraph = () => {
    return (


        <View style={styles.chartContainer}>
            <LineChart
                data={{
                    labels: ["Check in 1", "Check in 2", "Check in 3", "Check in 4", "Check in 5", "Check in 6"],
                    datasets: [
                        {
                            data: [0, 5, 10, 3, 20, 7],
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`,
                        }
                    ],
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#005965",
                    backgroundGradientFrom: "#F0FDFF",
                    backgroundGradientTo: "#F0FDFF",
                    fillShadowGradient: "#00365C",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`,
                    style: {
                        borderRadius: 16,
                        // color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`,
                        // borderWidth: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: "#005965"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    chartContainer: {
        padding: 10
    }
})


export default MoodGraph;
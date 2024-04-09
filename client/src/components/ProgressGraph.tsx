import { View, Dimensions } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'

const ProgressGraph = () => {
    const data = {
        labels: ["Meditate", "Excercise", "Read"],
        data: [0.4, 0.6, 0.8],
        color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`,
    };

    const chartConfig = {
        backgroundGradientFrom: "#F0FDFF",
        backgroundGradientTo: "#F0FDFF",
        color: (opacity = 2) => `rgba(0, 88, 151, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View>
            <ProgressChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
            />
        </View>
    )
}

export default ProgressGraph;
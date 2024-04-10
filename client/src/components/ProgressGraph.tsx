import { View, Dimensions } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'

const ProgressGraph = () => {
    const data = {
        labels: ["Meditate", "Excercise", "Read"],
        data: [0.4, 0.6, 0.8],
        color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`,
    };

    const chartConfig = {
        backgroundGradientFrom: "none",
        backgroundGradientTo: "none",
        color: (opacity = 2) => `rgba(0, 88, 151, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        contentInset: { top: 20, bottom: 20, left: 20, right: 20 }
    };

    return (
        <View>
            <ProgressChart
                data={data}
                width={Dimensions.get("window").width - 80}
                height={220}
                strokeWidth={16}
                radius={16}
                chartConfig={chartConfig}
                hideLegend={false}
                style={{ margin: 0 }}
            />
        </View>
    )
}

export default ProgressGraph;
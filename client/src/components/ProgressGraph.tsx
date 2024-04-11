import { View, Dimensions } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface GoalData {
    user: number,
    goal_date: string,
    screen_goal: number,
    meditation_goal: number,
    excercise_goal: number,
    screen_time: number,
    meditation_time: number,
    excercise_time: number
}

const ProgressGraph = () => {
    const [data, setData] = useState<GoalData>({} as GoalData)

    useEffect(() => {
        const getData = async () => {
            try {
                const user_id = 1
                const date = "2024-04-10"
                const res = await axios.get(`http://localhost:8000/?user_id=${user_id}&date=${date}`);
                setData(res.data)
            } catch (error) {
                console.log("Error fetching user data", error)
            }
        };

        getData();
    }, [])

    // const placeholderData = {
    //     labels: ["Meditate", "Excercise", "Read"],
    //     data: [0.4, 0.6, 0.8],
    //     color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`,
    // };

    const screenPercent = data.screen_time / data.screen_goal;
    const meditationPercent = data.meditation_time / data.meditation_goal;
    const excercisePercent = data.excercise_time / data.excercise_goal;

    const chartData = {
        labels: ["Screen time", "Meditation", "Excercise"],
        data: [screenPercent, meditationPercent, excercisePercent],
        color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`
    }

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
                data={chartData}
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
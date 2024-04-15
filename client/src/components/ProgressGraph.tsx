import { View, Dimensions } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import AppLoading from 'expo-app-loading'

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

    let { user } = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            try {
                const user_id = user.user_id;
                const currentDate = new Date().toISOString().split('T')[0];
                const res = await axios.get(`http://localhost:8000/?user_id=${user_id}&date=${currentDate}`);
                setData(res.data)
            } catch (error) {
                console.log("Error fetching user data", error)
            }
        };

        getData();
    }, [])

    const screenPercent = data.screen_time / data.screen_goal;
    const meditationPercent = data.meditation_time / data.meditation_goal;
    const excercisePercent = data.excercise_time / data.excercise_goal;

    const chartData = {
        labels: ["Screen time", "Meditation", "Excercise"],
        data: [screenPercent, meditationPercent, excercisePercent],
        color: (opacity = 1) => `rgba(0, 54, 92, ${opacity})`
    }

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        color: (opacity = 2) => `rgba(0, 88, 151, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        contentInset: { top: 20, bottom: 20, left: 20, right: 20 }
    };

    return (
        <View>
            <ProgressChart
                data={chartData}
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
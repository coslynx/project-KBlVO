import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ActivityScreen from '../screens/ActivityScreen';
import GoalScreen from '../screens/GoalScreen';
import ProgressScreen from '../screens/ProgressScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import HealthProfessionalScreen from '../screens/HealthProfessionalScreen';
import MeditationScreen from '../screens/MeditationScreen';
import NutritionScreen from '../screens/NutritionScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SecurityScreen from '../screens/SecurityScreen';
import PremiumFeaturesScreen from '../screens/PremiumFeaturesScreen';
import ExpertInsightsScreen from '../screens/ExpertInsightsScreen';
import SleepScreen from '../screens/SleepScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Activity: ActivityScreen,
    Goal: GoalScreen,
    Progress: ProgressScreen,
    Dashboard: DashboardScreen,
    Challenges: ChallengesScreen,
    HealthProfessional: HealthProfessionalScreen,
    Meditation: MeditationScreen,
    Nutrition: NutritionScreen,
    Community: CommunityScreen,
    Security: SecurityScreen,
    PremiumFeatures: PremiumFeaturesScreen,
    ExpertInsights: ExpertInsightsScreen,
    Sleep: SleepScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
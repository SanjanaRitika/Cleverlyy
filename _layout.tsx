import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="pages/SelectCountry" />
      <Stack.Screen name="pages/SelectExam" />
      <Stack.Screen name="pages/SelectSubject" />
      <Stack.Screen name="pages/SelectYearGroup" />
      <Stack.Screen name="pages/PlanSelectionScreen" />
      <Stack.Screen name="pages/yearwiseResources" />
      <Stack.Screen name="pages/Dashboard" />
      <Stack.Screen name="pages/Papers" />
      <Stack.Screen name="pages/Revision" />
      <Stack.Screen name="pages/Resources" />
      <Stack.Screen name="pages/OtherResources" />
      <Stack.Screen name="pages/ChapterwiseQP" />
      <Stack.Screen name="pages/RevisionQP" />
      <Stack.Screen name="pages/YearwiseQP" />
      <Stack.Screen name="pages/ThinkTank" />
     
     
      
      
      
    
    </Stack>
  );
}

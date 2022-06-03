import React, { Component, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View, Text, Dimensions } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryGroup, VictoryLabel, VictoryPie} from "victory-native";
import {financeStyles, globalColors, globalFonts} from '../styles';
import TopHeader from '../components/TopHeader'
import TopPickers from '../components/TopPickers'

// redux
function sumTotal(arr){
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum+=arr[i].value
  }
  return sum
}
const pieData={
  income:[
    {category:'Rental', value:100, color:"#58cc8a"},
    {category:'Overmileage', value:60, color:"#ff8fdb"},
    {category:'Damage', value:80, color:"#3d5db8"},
    {category:'Transport', value:50, color:"#FFA32F"},
  ],
  expenses:[
    {category:'Fuel', value:10, color:"#FFA32F"},
    {category:'Repairs', value:20, color:"#41a1d9"},
    {category:'Upgrades', value:10, color:"#f2ce3d"},
    {category:'Lease', value:50, color:"#db6558"},
    {category:'Insurance', value:70, color:"#9552EA"},
    {category:'Other', value:20, color:"#c9bb8b"},
  ],

}
// const getIncome = () => {
//   return transactions
//     .map((tran) => +tran.amount)
//     .filter((amt) => amt > 0)
//     .reduce((a, b) => a + b, 0);
// };

// const getExpense = () => {
//   return transactions
//     .map((tran) => +tran.amount)
//     .filter((amt) => amt < 0)
//     .reduce((a, b) => a + b, 0);
// };
const totalData={
  totalIncome:sumTotal(pieData.income),
  totalExpenses:sumTotal(pieData.expenses),
  currency:'$'
}
const chartData=[
  {info:"PROFIT", value: Math.abs(totalData.totalIncome-totalData.totalExpenses), originalValue:totalData.totalIncome-totalData.totalExpenses},
  {info:"EXPENSES", value: totalData.totalExpenses, originalValue:totalData.totalExpenses},
  {info:"INCOME", value: totalData.totalIncome, originalValue:totalData.totalIncome},
]
// const defaultChartData=[
//   {info:"PROFIT",value:50},
//   {info:"EXPENSES",value:50},
//   {info:"INCOME",value:1},
// ]

const screenWidth = Math.round(Dimensions.get('window').width);

const Chart=()=> {

    function SummaryTop(){
      return(
        <View style={financeStyles.summaryTop}>
        <View style={financeStyles.summaryMoneyBlock}>
          <Text style={{color: globalColors.income, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>{totalData.totalIncome} {totalData.currency}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>INCOME</Text>
        </View>
        <View style={financeStyles.summaryMoneyBlock}>
          <Text style={{color: globalColors.expenses, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>{totalData.totalExpenses} {totalData.currency}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>EXPENSES</Text>
        </View>
      </View>
      )
    }

    function SummaryChart(){
      // const [graphicData, setGraphicData]=useState(defaultChartData);
      // useEffect(()=>{
      //   setGraphicData(chartData);
      // },[])
      return(
        <View style={{marginBottom:25}}>
        <VictoryChart height={200} width={screenWidth-20} padding={{left:90, top:45, bottom:45, right:90}} theme={VictoryTheme.material}>
          <VictoryAxis style={{axis:{stroke:"transparent"}, ticks:{stroke:"transparent"}}}/>
          {/* tickLabels:{fill:'transparent'} */}
          <VictoryBar
            horizontal
            cornerRadius={{top:8, bottom:8}}
            data={chartData}
            x="info" y="value"
            labels={({datum})=>datum.info=="EXPENSES" ? `-${datum.value} ${totalData.currency}` : `${datum.originalValue} ${totalData.currency}`}       //visual minus value
            labelComponent={<VictoryLabel/>}
            barRatio={1}
            style={{
              data:{
                fill: ({datum})=> datum.info=="EXPENSES" || datum.originalValue<0 ? globalColors.expenses : globalColors.income
              },
              labels:{
                fontWeight:'500',
                fontSize:13,
                fill: ({datum})=> datum.info=="EXPENSES" || datum.originalValue<0 ? globalColors.expenses : globalColors.income
              }
            }}
            />
        </VictoryChart>
        </View>
      )
    }
    const [selectedIndex, setSelectedIndex]= useState(0)
    function buttonGroup(){
      const buttons=['Expenses', 'Income']
      return(
          <ButtonGroup 
            onPress={(newSelectedIndex)=>setSelectedIndex(newSelectedIndex)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height:55, marginHorizontal:45, marginVertical:25, backgroundColor:globalColors.buttonLightGrey, borderWidth:2, borderColor:globalColors.rootLight ,borderRadius:15}}
            innerBorderStyle={{width:0}}
            buttonStyle={{backgroundColor:'transparent'}}
            selectedButtonStyle={{backgroundColor:'#F5E5E1', borderRadius:13}}
            selectedTextStyle={{color: globalColors.lightBlack}}
            />
      )
    }

    function PieChart(){
      return(
          <VictoryPie
            height={300}
            width={screenWidth}
            data={selectedIndex==0 ? pieData.expenses : pieData.income}
            x="category"
            y="value"
            innerRadius={55}
            style={{
              data:{
                fill:({datum})=>datum.color
              },
              labels:{
                fontWeight:'400',
                fontSize:15,
                fill:({datum})=>datum.color
              }
            }}
            labels={({datum})=>selectedIndex==0 ? `${Math.round(datum.value/totalData.totalExpenses*100)}%` : `${Math.round(datum.value/totalData.totalIncome*100)}%`}
            // animate={{easing:"exp"}}
            />
      )
    }

    function CategoriesList(){

      function CategoryElement(el){
        return(
        <TouchableHighlight onPress={()=>alert("tap")} activeOpacity={0.5} underlayColor={globalColors.rootLight}>
        <View style={financeStyles.categoryElement}>
          <View style={{justifyContent:'center', marginLeft:5}}>
            <View style={{backgroundColor:el.element.color,height:22, width:22, borderRadius:45, marginHorizontal:15}}></View>
          </View>
          <View style={{flex:1, justifyContent:'center'}}>
            <Text style={{fontFamily:globalFonts.medium, fontSize:15,}}>{el.element.category}</Text>
          </View>
          <View style={{justifyContent:'center', marginHorizontal:15}}>
            <Text style={{fontFamily:globalFonts.regular, fontSize:15, color:selectedIndex==0 ? globalColors.expenses: globalColors.income}}> {selectedIndex==0 ? -el.element.value : el.element.value} {totalData.currency}</Text>
          </View>
        </View>
        </TouchableHighlight>
        )

      }

      if(selectedIndex==0){
        return pieData.expenses
        .sort((a,b)=>(b.value-a.value))
        .map((element)=>{
          return(
              <CategoryElement element={element}/>
          )
        })
      }
      else {        
        return pieData.income
        .sort((a,b)=>(b.value-a.value))
        .map((element)=>{
         return(
            <CategoryElement element={element}/>
         ) 
        })
      }
    }

    return (
      <View style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
          {/* <TopHeader title={"Chart"}/> */}
        </SafeAreaView>
          <TopPickers title={"Chart"}/>
        <ScrollView style={{paddingTop:12}} nestedScrollEnabled={true}>   
          <View style={financeStyles.summaryContainer}>
            <Text style={financeStyles.sectionHeader}>Summary</Text>
            <View style={{ marginHorizontal:15, borderRadius:15,}}>
              <SummaryTop/>
              <SummaryChart/>
            </View>
          </View>

          <View style={financeStyles.categoriesContainer}>
            <Text style={financeStyles.sectionHeader}>Categories</Text>
            {buttonGroup()}
            <PieChart/>
            <View style={{paddingVertical:15}}>
              <CategoriesList/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}
export default Chart

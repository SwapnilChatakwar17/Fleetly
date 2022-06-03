import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import {
  Header,
  Button,
  Icon,
  BottomSheet,
  ListItem,
} from "react-native-elements";
import {financeStyles, globalColors, globalFonts} from '../styles';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import data from "../resource/TransactionData";
import TopHeader from "../components/TopHeader";
import TopPickers from "../components/TopPickers";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(data);
  const [isVisible, setIsVisible] = useState(false);

  const list = [
    {
      title: "Add",
      containerStyle: { backgroundColor: "green" },
      titleStyle: { color: "white" },
      onPress: () => addTransaction(),
    },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => closeBottomSheet(),
    },
  ];

  const closeBottomSheet = () => {
    setIsVisible(false);
    setName("");
    setAmount("");
  };

  const addTransaction = () => {
    setTransactions((prev) => {
      return [
        {
          id: prev.length + 1,
          name,
          amount,
        },
        ...prev,
      ];
    });
    closeBottomSheet();
  };

  const getTotal = () => {
    return transactions.map((tran) => +tran.amount).reduce((a, b) => a + b, 0);
  };

  const getIncome = () => {
    return transactions
      .map((tran) => +tran.amount)
      .filter((amt) => amt > 0)
      .reduce((a, b) => a + b, 0);
  };

  const getExpense = () => {
    return transactions
      .map((tran) => +tran.amount)
      .filter((amt) => amt < 0)
      .reduce((a, b) => a + b, 0);
  };

  const renderTransaction = ({ item }) => {
    const isExpense = item.amount < 0;
    return (
      <View style={[styles.tracker, styles.item]}>
        <Text style={[styles.childText]}>{item.name}</Text>
        <Text
          style={[
            styles.ChildAmount,
            isExpense ? styles.cExpense : styles.cIncome,
          ]}
        >
          $ {item.amount.toString()}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
      <TopHeader title={"Expense Tracker"}/>
      </SafeAreaView>
        <View>
        <Text style={[styles.title]}>$ {getTotal()}</Text>
        <View style={financeStyles.summaryTop}>
        {/* <Text style={[styles.label, styles.income]}>$ {getIncome()}</Text> */}
        {/* <Text style={[styles.label, styles.expense]}>
          $ {Math.abs(getExpense())}
        </Text> */}
        <View style={financeStyles.summaryMoneyBlock}>
          <Text style={{color: globalColors.income, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>$ {getIncome()}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>INCOME</Text>
        </View>
        <View style={financeStyles.summaryMoneyBlock}>
          <Text style={{color: globalColors.expenses, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>$ {Math.abs(getExpense())}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>EXPENSES</Text>
        </View>
      </View>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        <TextInput
          style={[styles.input, styles.text]}
          onChangeText={setName}
          value={name}
          placeholder="Enter Transaction Name"
        />
        <TextInput
          style={[styles.input, styles.text]}
          onChangeText={setAmount}
          value={amount.toString()}
          placeholder="Enter Amount"
          keyboardType="numeric"
        />
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      <Button
        icon={<Icon name="add" size={30} color="white" />}
        title="Add transaction"
        style={styles.button}
        onPress={() => setIsVisible(true)}
      />
      </View>
        <ScrollView horizontal={false} >
      <View style={financeStyles.expenseContainer}>

      <Text style={[styles.title, { textAlign: "left", paddingLeft: 5 }]}>
        Recent Transactions
      </Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header: {
  //   height: 90,
  //   marginTop: 22,
  // },
  left: {
    // paddingTop: 5,
    color: "white",
  },
  center: {
    fontSize: 20,
    // paddingTop: 5,
    color: "white",
    fontWeight: "bold",
  },
  tracker: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: '#F5E5E1'
  },
  box: {
    width: 50,
    height: 50,
  },
  text: {
    height: 60,
    padding: 15,
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    height: 60,
    padding: 15,
    color: "black",
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
  },
  label: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  income: {
    backgroundColor: "green",
  },
  expense: {
    backgroundColor: "red",
  },
  item: {
    padding: 15,
    margin: 5,
    backgroundColor: "#F5E5E1",
    // borderBottomWidth: 10,
    // borderColor: "#f5d5d3",
    justifyContent: "space-between",
    borderRadius: 25
  },
  childText: {
    textAlign: "center",
    fontSize: 20,
  },
  ChildAmount: {
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#F5E5E1",
  },
  cIncome: {
    color: "#3ab334",
  },
  cExpense: {
    color: "red",
  },
});

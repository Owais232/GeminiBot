import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";


const Form=()=>{


const[fname,setfname]=useState('');
const[lname,setlname]=useState('');
const[email,setemail]=useState('');
const[pass,setpass]=useState('');
const[phone,setphone]=useState('');

const Validateemail =(email : string)=>{
  const  emailregex= /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return emailregex.test(email)
}

const validatephone=(phone : string)=>{
  const phoneregix = /^[0-9]*$/;

  return phoneregix.test(phone)

}


const Handlesubmit=()=>{
  if(!Validateemail(email)){
    Alert.alert("Wrong email");
    return;
  }
if(!validatephone(phone)){
  Alert.alert("Wrong phone number");
  return;
}


Alert.alert('Form Submitted','Your form has been submitted')
}
  

  return(
    <View style={styles.container}>
      <Text style={styles.label}>First Name </Text>
      <TextInput
      placeholder="Enter your first name "
      style={styles.input}
      value={fname}
      onChangeText={setfname}
      />
      <Text style={styles.label}>Last Name </Text>
      <TextInput
      placeholder="Enter your Last name "
      style={styles.input}
      value={lname}
      onChangeText={setlname}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
      placeholder="Enter your Email"
      style={styles.input}
      value={email}
      onChangeText={setemail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
      placeholder="Enter your Password"
      style={styles.input}
      value={pass}
      onChangeText={setpass}
      secureTextEntry
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
      placeholder="Enter your Phone Number "
      style={styles.input}
      value={phone}
      onChangeText={setphone}
      keyboardType="numeric"
      />

      <Button title="Submit" onPress={Handlesubmit}/>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    padding:20,
  },
  label:{
    marginVertical:8,
    fontWeight:'bold'
  },
  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8
  }
})

export default Form;
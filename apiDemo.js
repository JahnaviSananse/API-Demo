import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const apiDemo = () => {
  const [data, setData] = useState('');
  const [buttonToggle, setButtonToggle] = useState(false);

  useEffect(() => {
    if (buttonToggle === true) {
      fetch(`https://api.github.com/users/${data}`)
        .then(response => response.json())
        // .then(json => setData(json))
        .then(json => console.log(json))
        .catch(error => {
          alert(error);
        });
      setButtonToggle(false);
    }
  }, [buttonToggle]);

  const onButtonPress = () => {
    // alert(data);
    setButtonToggle(true);
  };

  return (
    <>
      <View style={{flexDirection: 'column'}}>
        <TextInput
          style={styles.input}
          placeholder="GIT ID HERE"
          onChangeText={text => {
            setData(text);
          }}
        />
        <Button title="SEARCH" onPress={onButtonPress} />
        {data.login ? (
          <>
            <Text style={styles.textFont}> ID : {data.id}</Text>
            <Text style={styles.textFont}> NAME : {data.name}</Text>
            <Text style={styles.textFont}> LOGIN : {data.login}</Text>
            <Text style={styles.textFont}> FOLLOWERS : {data.followers}</Text>
            <Text style={styles.textFont}> FOLLOWING : {data.following}</Text>
          </>
        ) : data.length === 0 ? (
          <Text> ENTER YOUR ID </Text>
        ) : data.login && buttonToggle ? (
          <Text> NO USER FOUND</Text>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '90%',
  },
  textFont: {fontSize: 20},
});

export default apiDemo;

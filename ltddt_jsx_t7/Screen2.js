import React, {useState} from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    name: 'Tran Thi B',
    email: 'b.tran@gmail.com',
    phone: '09876543321'
  })

  const [addedItemId, setAddedItemId] = useState(null);

  const sentAPI = () => {
    fetch('https://66f4d07977b5e889709a8de9.mockapi.io/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(jsonResponse => {
      console.log('Added Response:', jsonResponse);
      setAddedItemId(jsonResponse.id);
      navigation.navigate('Sent_API'); 
    })
    .catch(error => console.error('Error:', error));
  };

  const deleteAPI = () => {
    if (addedItemId) {
      fetch(`https://66f4d07977b5e889709a8de9.mockapi.io/chat/${addedItemId}`, {
        method: 'DELETE',
      })
      .then(() => {
        console.log(`Item with id ${addedItemId} deleted.`);
        setAddedItemId(null);
      })
      .catch(error => console.error('Error:', error));
    } else {
      console.log('No item to delete.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <View style={styles.group1}>
          <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}>
            <Image source={require('./assets/Screen2/ArrowIcon.png')} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Image source={require('./assets/Screen2/faceicon.png')} style={styles.faceIcon} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Hi Twinkle</Text>
              <Text style={styles.greeting}>Have a great day ahead</Text>
            </View>
          </View>
        </View>

        <View style={styles.group2}>
          <View style={styles.searchBox}>
            <Image source={require('./assets/Screen2/searchicon.png')} />
            <Text style={styles.title}>Search</Text>
          </View>
        </View>

        <View style={styles.group3}>
          <View style={styles.list}>
            <View style={styles.textContainer1}>
              <Image source={require('./assets/Screen2/checkicon.png')} />
              <View style={styles.titleContainer}>
                <Text style={styles.listTitle}>To check email</Text>
              </View>
            </View>
            <View style={styles.groupButton}>
              <Image source={require('./assets/Screen2/editicon.png')} />
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} /></TouchableOpacity>
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} /></TouchableOpacity>
            </View>  
          </View>

          <View style={styles.list}>
            <View style={styles.textContainer1}>
              <Image source={require('./assets/Screen2/checkicon.png')} />
              <View style={styles.titleContainer}>
                <Text style={styles.listTitle}>UI task web page</Text>
              </View>
            </View>
            <View style={styles.groupButton}>
              <Image source={require('./assets/Screen2/editicon.png')} />
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} /></TouchableOpacity>
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} /></TouchableOpacity>
            </View>  
          </View>

          <View style={styles.list}>
            <View style={styles.textContainer1}>
              <Image source={require('./assets/Screen2/checkicon.png')} />
              <View style={styles.titleContainer}>
                <Text style={styles.listTitle}>Learn javascript basic</Text>
              </View>
            </View>
            <View style={styles.groupButton}>
              <Image source={require('./assets/Screen2/editicon.png')} />
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} /></TouchableOpacity>
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} /></TouchableOpacity>
            </View>  
          </View>

          <View style={styles.list}>
            <View style={styles.textContainer1}>
              <Image source={require('./assets/Screen2/checkicon.png')} />
              <View style={styles.titleContainer}>
                <Text style={styles.listTitle}>Learn HTML Advance</Text>
              </View>
            </View>
            <View style={styles.groupButton}>
              <Image source={require('./assets/Screen2/editicon.png')} />
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} /></TouchableOpacity>
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} /></TouchableOpacity>
            </View>  
          </View>

          <View style={styles.list}>
            <View style={styles.textContainer1}>
              <Image source={require('./assets/Screen2/checkicon.png')} />
              <View style={styles.titleContainer}>
                <Text style={styles.listTitle}>Medical App UI</Text>
              </View>
            </View>
            <View style={styles.groupButton}>
              <Image source={require('./assets/Screen2/editicon.png')} />
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} /></TouchableOpacity>
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} /></TouchableOpacity>
            </View>  
          </View>

          <View style={styles.list}>
            <View style={styles.textContainer1}>
              <Image source={require('./assets/Screen2/checkicon.png')} />
              <View style={styles.titleContainer}>
                <Text style={styles.listTitle}>Learn Java</Text>
              </View>
            </View>
            <View style={styles.groupButton}>
              <Image source={require('./assets/Screen2/editicon.png')} />
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} /></TouchableOpacity>
              <TouchableOpacity><Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} /></TouchableOpacity>
            </View>  
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
            <Image style = {{marginTop: 20}} source={require('./assets/Screen2/plusbutton.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer1: {
    height: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  group1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faceIcon: {
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userName: {
    fontFamily: 'Epilogue',
    fontSize: 20,
    fontWeight: '700',
  },
  greeting: {
    fontFamily: 'Epilogue',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
  },
  group2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchBox: {
    flexDirection: 'row',
    width: '90%',
    height: 44,
    borderWidth: 2,
    borderColor: 'rgba(144, 149, 160, 1)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 5,
  },
  group3: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 335,
    height: 48,
    backgroundColor: 'rgba(144, 149, 160, 1)',
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 15,
  },
  listTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
  },
  textContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100, 
  },
  button_size: {
    width: 24,
    height: 24
  }
});

export default Screen2;

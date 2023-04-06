import {
    View,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import { data } from '../data/data'

  
  export default function Home({navigation}) {
    const [addCart, setAddCart] = useState([]); // for cart
    const [total, setTotal] = useState(0);

  
    const renderItem = ({item, index}) => {
      return (
        <View>
          <View style={styles.main_div}>
            <Image
              style={{width: 90, height: 80, borderRadius: 10}}
              source={item.img}
            />
  
            <Text style={styles.txxt}>{item.title} </Text>
            <Text style={{position: 'absolute', right: 10, top: 12}}>
              {item.price}{' '}
            </Text>
  
            {addCart.includes(item) ? (
              //minus icon
              <TouchableOpacity
                onPress={() => {
                  const find = addCart.indexOf(item.id); // code for add or remove array from id
                  if (find !== -1) {
                    addCart.splice(find, 1); // 2nd parameter means remove one item only
                  }
                  setAddCart(addCart.filter(x => x.id !== item.id));
                }}
                style={styles.plus_icon}>
                <Text>
                Delete to Cart
                </Text>
              </TouchableOpacity>
            ) : (
              //plus icon
              <TouchableOpacity
                onPress={() => {
                  setAddCart(pre => [
                    ...pre,
                    {id: item.id, count: 1, price: item.price, title: item.title},
                  ]);
                  setAddCart([...addCart, item]);
                }}
                style={styles.plus_icon}>
                <Text>
                
                  Add To Cart
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    };
    return (
      <>
  <Text style={styles.first_hed}>All Item List</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />
  
        <View style={styles.cart_div}>
          <Text style={{color: '#FFFFFF', fontSize: 20}}>
            {' '}
            {`${addCart.length} - Item`}{' '}
          </Text>
  
          <TouchableOpacity
            style={styles.cart_btn}
            onPress={() =>
              navigation.navigate()
            }>
            <Text style={{color: '#FFFFFF', fontSize: 20}}> View Cart </Text>
          </TouchableOpacity>
  
          <Text style={styles.cart_price}>{`Pkr - ${total}`}</Text>
        </View>
      </>
    );
  }
  // CSS Code
  const styles = StyleSheet.create({
    txxt: {
      fontSize: 17,
      color: 'black',
      fontWeight: '600',
      marginTop: 10,
      marginLeft: 30,
    },

    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    main_div: {
      backgroundColor: 'white',
      marginBottom: 20,
      borderRadius: 10,
      marginLeft: 20,
      marginRight: 20,
      elevation: 2,
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop:10
    },
   
 
    plus_icon: {
      backgroundColor: '#FFD200',
      height: 30,
      width: 100,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      position: 'absolute',
      right: 16,
    },
    cart_btn: {
      backgroundColor: '#FFD200',
      borderRadius: 10,
      padding: 10,
    },
    cart_div: {
      backgroundColor: '#6DC54A',
      height: 70,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    cart_price: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    first_hed:{
        textAlign:'center',
        fontSize:30,
        marginTop:10,
        marginBottom:10
    }
  });
  









// import { View, Text ,FlatList,StyleSheet,TouchableOpacity,Image} from 'react-native'
// import React from 'react'
// import { data } from '../data/data'

// export default function Home() {
//     const renderItem2 = ({item}) => (
//         <TouchableOpacity
//           onPress={() => navigation.navigate()}>
//           <View>
//             <Image source={item.img} style={styles.img_tg_2r}></Image>
//             <Text style={styles.ip_txt1}> {item.title} </Text>
//           </View>
//         </TouchableOpacity>
//       );


//   return (
//   <View>
//       <View style={styles.loctcont_txt_2}>
//     <Text style={styles.loctcont_txt_inr_2}>Popular Restaurents</Text>
//   </View>
//   <View style={styles.loctcont_3r}>
//     <FlatList
//       style={styles.listStyle_2r}
   
//       showsHorizontalScrollIndicator={false}
//       data={data}
//       keyExtractor={item => item.id}
//       renderItem={renderItem2}
//     />
//   </View>
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//     img_tg_2r:{
// height:100,
// width:100,
// borderRadius:15
//     }  ,

// })
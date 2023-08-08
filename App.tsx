import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'

export default function App() {
  const scrollToBottom = useRef(null)
  const [Messages, setMessages] = useState([
    { id: 1, text: 'Hello there!', sender: 'user' },
    { id: 2, text: 'Hi! How can I help you?', sender: 'bot' },
    { id: 3, text: 'I have a question about a product.', sender: 'user' },
    { id: 4, text: `Sure, I'd be happy to help. What do you want to know?`, sender: 'bot' },
  ])
  const [Msg, setMsg] = useState('')

  const scroll = () => {
    scrollToBottom.current.scrollToEnd({ animated: true });
  };
  const sendMsg = () => {
    setMessages([
      ...Messages,
      {
        text: Msg
      }

    ])
    scroll()

  }
  return (
    <View style={{ flex: 1, marginTop: 20, padding: 20 }}>
      <View style={{ flex: 0.9 }}>
        <FlatList
        ref={scrollToBottom}
        onContentSizeChange={scroll} // Scroll to the bottom when content size changes
          inverted renderItem={({ item }) => {
            return (
              <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
                  {item.sender === 'user' ? 'You' : 'Bot'}
                </Text>
                <Text>{item.text}</Text>
              </View>
            )
          }} data={Messages} />
      </View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <TextInput onChangeText={(a) => {
          setMsg(a)
        }
        } placeholder='Start Chat' style={{ borderWidth: 1, flex: 0.9, padding: 10, borderColor: 'black' }} />
        <TouchableOpacity onPress={sendMsg} style={{ backgroundColor: 'lightblue', padding: 10 }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
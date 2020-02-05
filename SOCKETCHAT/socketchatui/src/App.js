import React from 'react';
import Axios from 'axios'
import io from 'socket.io-client'
import './App.css';

function App() {
  const [message, setmessages] = React.useState([]) // //state messages
  const [userCount, setusercount] = React.useState(0) // //state user
  const [inputdata, setinputdata] = React.useState({ // //state data yang diinput pada messages
    name: React.useRef(),
    message: React.useRef()
  })

  React.useEffect(() => {
    const socket = io('http://localhost:1997/') // //lokasi socket
    socket.on('chat message', updateMessages) // //function chat
    socket.on('user connected', updateUserCount) // //function user
    Axios.get('http://localhost:1997/chat/getmessages') // //mengambil messages pada link get messages
      .then((res) => {
        setmessages(res.data)
      })
  }, [])

  const updateMessages = (msgs) => { // //update messages
    setmessages(msgs)
  }

  const updateUserCount = (count) => { // //update usercount
    setusercount(count)
  }

  const onBtnSendClick = () => { // //function button send
    Axios.post('http://localhost:1997/chat/sendmessages', { // //melakukan post
      name: inputdata.name.current.value,
      message: inputdata.message.current.value
    }).then((res) => {
      console.log(res.data);
    })
  }

  const onBtnClearClick = () => { // //function button clear
    Axios.delete('http://localhost:1997/chat/clearmessages') // //melakukan delete
      .then((res) => {
        console.log(res.data);
      })
  }

  const renderListMessage = () => { // //me-render messages
    return message.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.message}</td>
          <td></td>
        </tr>
      )
    })
  }

  return (
    <div>
      <center>
        <h2>Chat Group (User Connected: {userCount})</h2>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Message</th>
              <th><input type='button' value='clear' onClick={onBtnClearClick} /></th>
            </tr>
          </thead>
          <tbody>
            {renderListMessage()}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <input type='text' ref={inputdata.name} />
              </td>
              <td>
                <input type='text' ref={inputdata.message} />
              </td>
              <td>
                <input type='button' value='send' onClick={onBtnSendClick} />
              </td>
            </tr>
          </tfoot>
        </table>
      </center>
    </div>
  );
}

export default App;

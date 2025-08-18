import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Chat from "./page/Chat";
import "./App.css";

import { useRef, useState, createContext } from "react";

export const ChatStateProvider = createContext();
export const ChatProvider = createContext();

const mockData = [
  {
    id: 0,
    text: "안녕하세요.",
    date: new Date("2024-08-18T10:30:00").getTime(),
  },
  {
    id: 1,
    text: "개발자 황호태입니다.",
    date: new Date("2024-08-18T15:42:12").getTime(),
  },
  {
    id: 2,
    text: "그 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세",
    date: new Date("2024-08-18T23:02:12").getTime(),
  },
];

function App() {
  const [chatData, setChatData] = useState(mockData);

  const idRef = useRef(3);

  const onCreateChat = (text, date) => {
    const newChat = {
      id: idRef.current++,
      text: text,
      date: new Date(date).getTime(),
    };
    setChatData([...chatData, newChat]);
  };

  return (
    <>
      <ChatStateProvider.Provider value={chatData}>
        <ChatProvider.Provider value={onCreateChat}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </ChatProvider.Provider>
      </ChatStateProvider.Provider>
    </>
  );
}

export default App;

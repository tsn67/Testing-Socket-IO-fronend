import React, { useEffect, useState } from "react";
import {io} from 'socket.io-client';

function App() {

    const [onlinecount, setOnlineCount] = useState(0);


    useEffect(() => {
        const socket = io('https://testing-socket-io-backend-production.up.railway.app/');
        socket.on('init', (json) => {
            console.log(json);
            setOnlineCount(json.count);  
        });
    }, []); 

    return <div>
        <h3>online: {onlinecount == 0?"loading":onlinecount}</h3>
    </div>
}

export default App;
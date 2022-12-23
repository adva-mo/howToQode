import { useEffect } from "react";
import io from "socket.io-client";

const socket = new io("http://localhost:1234", {
  autoConnect: false,
  withCredentials: true,
});

const useSocketSetup = () => {
  useEffect(() => {
    socket.connect();
    // console.log(socket);
    socket.on("connect_error", (err) => {
      //log user out
      if (err) console.log("error");
    });
    return () => socket.off("connect_error");
  }, []);
};

export default useSocketSetup;

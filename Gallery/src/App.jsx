import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);
    const getData=async()=>{
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=32`,
    );
    setUserdata(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

let printUserData = (
  <h2 className="text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    Loading...
  </h2>
)  
if (userdata.length > 0) {
    printUserData = userdata.map((elem, idx) => {
      return (
        <a href={elem.download_url} className="">
          <div key={idx} className=" mb-4 break-inside-avoid relative group overflow-hidden  ">
            <img
              src={elem.download_url}
              alt=""
              className="w-full "
            />
            <div className="absolute bottom-0 left-0 w-full
      bg-black/60 text-white text-center
      p-3
      translate-y-full
      group-hover:translate-y-0
      transition-all duration-300">
<h3 className="text-white text-center">{elem.author}</h3>
            </div>
            
          </div>
        </a>
      );
    });
  }

  return (
    <div className="bg-white   min-h-screen">
      <div className=" columns-4 gap-4 p-4 min-h-[80vh] ">{printUserData}</div>
      <div className="  flex items-center gap-3 justify-center">
        {index == 1 ? null : (
          <button
            className="bg-yellow-500 p-2 rounded-xl font-bold font-serif pl-9 pr-9 active:bg-amber-200"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setUserdata([])
              }
            }}
          >
            
            Prev
          </button>
        )}

        <button
          className="bg-yellow-500 p-2 pl-9 pr-9 font-bold font-serif rounded-xl active:bg-amber-200"
          onClick={() => {
            
            setIndex(index + 1);
            setUserdata([])
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

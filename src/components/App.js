import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("travel");
  // search is a function that will make the api query to youtube, and will update a piece of state that is inside of the useVideos custom hook.
  //Every time we run the search function in this component, this component will also be re rendered.

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);


  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

/*

Custom hooks:

reusable code that makes use of function components and hooks

Besides components, custom hooks are the best way to create reusable code in React project.

Hooks are created by extracting some hook-related code out of an existing function (nothing related to JSX. To make JSX reusable, we always create another compoenent).

Custom hooks will always contain at least one primitive hook. Each custom hook that we create is going to have one single purpose.

They are created when more than one component need the same logic.

Process to create a custom hook:

1. look at existing components. Identify each line of non JSX code related to some single purpuse 

2. Identify the INPUTS and the OUTPUTS of that code, what are the arguments to those pieces of code.

What are the outside INPUTS that make that code run. In this case, it is the default search term.

The outputs, in this case are the VIDEOS and the response we get from the ONTERSUBMIT function.

3. Take the INPUTS and OUTPUTS and insert them into a sentence:

'IF YOU GIVE ME A DEFAULT SEARCH TERM, I WILL GIVE YOU A WAY TO SEARCH FOR VIDEOS AND ULTIMATELY A LIST OF VIDEOS'





















*/

/*
AIzaSyDUHkxzKJ4JyWh00DI0mj69roZA_O0hFJg
*/

/*
Hooks:

give functinal components additional functionality 

functional componenets canno make use of state or life-cycle, hooks will change that. 

With te hook systems, React gives us functions like useEffect, useState, useRef (they give additional functionality to a functional component )

- useState: allows us to use sate in a functional component. ( setState in class componenets )

- useEffect: make use of lifeCycle methods in functional components 


- useRef: allows us to create a ref in a functional component. 

Hooks allow us to write reusable code. 


10 functions (hooks) included in React:

1. useState
2. useEffect
3. useContect
4. useReducer
5. useCallback
6. useMemo
7. useRef
8, useImperativeHandle
9. useLayoutEffect
10. useDebigValue 



*/

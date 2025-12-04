import React from 'react'

function Message(){
    var name='navi';
    if(name){return <h1>hey {name}</h1>}else{
        return <h1>hey world</h1>
    }
  
}
export default Message

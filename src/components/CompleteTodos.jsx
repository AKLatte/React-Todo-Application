import React from 'react';

export const CompleteTodos = (props) => {
    const {todos, onClickBack} = props;
    return (
        <div className="completed-area">
        <p className="title">完了のTODO</p>
        <ul>
           {todos.map((todo, index) => {
             return (
               <div className="list-row">
                 <li>{todo}</li>
                 <button onClick={() => onClickBack(index)}>戻す</button>
               </div>
             );
           })}
         </ul>
     </div>
    );
};
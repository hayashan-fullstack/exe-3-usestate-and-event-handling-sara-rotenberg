import React from 'react';
import ReactDOM from 'react-dom';

const Head = () => {
    return (
        <div>
            <table border = '1'>
            <tr>
                <th width="24%">details</th>
                <th width="25%">deadline</th>
                <th width="25%">important</th>
                <th width="24%">done</th>
            </tr>
            </table>
        </div>

    )
}

const Print = (props) => {
    return (
        <div>
            <table border = '1'>
            <tr>
                <td width="25%">{props.line.details}</td>
                <td width="26%">{props.line.deadline}</td>
                <td width="27%">{props.line.important}</td>
                <td width="25%">{props.line.done}</td>
            </tr>
            </table>
        </div>

    )
}

const Printall = (props) => {
    return(
        props.toDoList.map(line=><Print line={line}/>)
    )
};

export const App = () => {
    const toDoList = [
        {
            details: "sara",
            deadline: "01/01/2000",
            important: "important",
            done: "V"
        },
        {
            details: "rivka",
            deadline: "12/04/2019",
            important: " ",
            done: "V"
        },
        {
            details: "rachel",
            deadline: "01/09/2012",
            important: "important",
            done: " "
        },
    ];
    return (
        <div style={{margin:'15%'}}>
        <br/>
        <br/>
            <h1>My Todo</h1>
            <br/>
            <Head/>
            <Printall toDoList={toDoList}/> 
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));


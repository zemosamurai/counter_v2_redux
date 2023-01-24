import React from 'react';
import './App.css';
import {Counter} from "../component/Counter/Counter";
import {SettingCounter} from "../component/SettingCounter/SettingCounter";

function App() {
    return (
        <div className='wrapperApp'>
            <SettingCounter/>
            <Counter/>
        </div>
    );
}

export default App;

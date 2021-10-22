import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/rating";


function App() {
    console.log("App //////")
    return (
        <div>
            <PageTitle title ={"This is APP component"}/>
            <PageTitle title ={"My friends"}/>
            <Rating value={0}/>
            <Accordion title ={"Menu"} collapsed={true}/>
            <Accordion title ={"Users"} collapsed={false}/>
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle //////")
    return <h1>{props.title}</h1>
}




export default App;

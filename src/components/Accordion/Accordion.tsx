import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion //////")
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    }
};

function AccordionBody() {
    console.log("AccordionBody ////////")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionBody //////")
    return <h3>{props.title}</h3>
};


export default Accordion;
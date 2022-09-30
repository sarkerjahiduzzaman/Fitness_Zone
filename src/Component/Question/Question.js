import React from 'react';

const Question = () => {
    return (
        <div className='just-class'>
              <div>
                <h1>How Does React Work ?</h1>
                <p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>
            <div>
                <h1>What is the Difference Between Props and State in React ?</h1>
                <p>In React, the developers build basic components and then use those basic components to build larger components, leading to a complete web page. While building these components, two important data manipulation methods are the state and props.
                    <br />
                    The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.
                    <br />
                    Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.

We pass the keyword props as a parameter to the function to access props in a function-based component.

In class-based components, we can access props using the this.props object. If we want to access props in the constructor of the class-based components, we first pass the props keyword into the constructor as a parameter and then call the super function by passing props as a parameter.
                </p>
            </div>

            <div>
                <h1>Use Efeect Work Station with out API Load ?</h1>
                <h4> 1 .Run useEffect on State Change :</h4>
                <p>By default, useEffect runs after every render, but it’s also perfect for running some code in response to a state change. You can limit when the effect runs by passing the second argument to useEffect.

Think of the second argument as an array of “dependencies” – variables that, if changed, the effect should rerun. These can be any kind of variable: props, state, or anything else.</p>
                <h4> 2 . Run useEffect When a Prop Changes :</h4>
                <p>Just as we were able to set up useEffect to run when a state variable changed, the same can be done with props. Remember theyre all regular variables! useEffect can trigger on any of them.

In this example, the PropChangeWatch component is receiving 2 props , and its effect will only run when the value of a changes because were passing an array containing [a] as the second argument.</p>
                <h4>3 . Focus On Mount :</h4>
                <p>Sometimes you just want to do one tiny thing at mount time, and doing that one little thing requires rewriting a function as a class.
In this example, lets look at how you can focus an input control upon first render, using useEffect combined with the useRef hook.</p>



</div>

        </div>
    );
};

export default Question;
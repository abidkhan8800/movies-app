import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import  { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import rootReducer from './reducers';

// function logger(obj, next, action);
// logger(obj)(next)(action)

// const logger = function ({dispatch, getState}){
//   return function(next){
//     return function(action){
//       // middleware function
//       console.log("ACTION_TYPE: ", action.type)
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) =>{
      // middleware function
      if(typeof action !== 'function'){
        console.log("ACTION_TYPE: ", action.type)
      }
      next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   // middleware function
//   // console.log("ACTION_TYPE: ", action.type)
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
// console.log('Before State', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: "Superman"}]
// });

// console.log('After State', store.getState());

// export const StoreContext = createContext();

// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     )
//   }
// }

//const connectedAppComponent = connect(callback)(App)
// export function connect (callback){
//   return function(Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(()=>{
//           console.log('UPDATED')
//           this.forceUpdate();
//         })
//       }

//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         return <StoreContext.Consumer>
//           {(store)=>{
//             const state =  store.getState();
//             const dataToBePassedAsProps = callback(state);
//             return <Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>
//           }}
//         </StoreContext.Consumer>
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render(){
//         return (
//           <StoreContext.Consumer>
//             {store => <ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         )
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

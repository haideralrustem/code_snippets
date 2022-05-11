

// conditional rendering

{ someBooleanTest? <Modal/> : null }



// state 

function Todo(props){
	const [ stateValue,  setStateValue] =  useState(someValue);

	function someFunction() {
		setStateValue(someValue)
	}
}




// execute functions through props

function Modal(props){
	function someThing(){
		props.someFunctionProp();
	}
}





// Routing
import { BrowserRouter } from 'react-router-dom'
<BrowserRouter> 

</BrowserRouter>


import { Route, Switch }  from 'react-router-dom'

function App(){
	// path is localhost:3000/ plus your path

	<Switch>
		<Route path='/favorites'>
			<NewMeetupPage />
		</Route>

		<Route path='/new-meetup'>
			<NewMeetupPage />
		</Route>
	</Switch>

	
}






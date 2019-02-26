import React, {Component} from 'react';
import './css/tailwind.css';
import Candylist from './components/Candylist/Candylist'
import Sort from './components/Sort/Sort'
import Filter from './components/Filter/Filter'

const _ = require('lodash');
const candies = require('./candy.json');

class App extends Component {
  constructor(props) {
    super(props)
    this.sort = this.sort.bind(this)
    this.filter = this.filter.bind(this)
    this.arrowUp = this.arrowUp.bind(this)
    this.arrowDown = this.arrowDown.bind(this)
    this.state = {
      sort: 'competitorname',
      order: 'asc',
      filter: 'none',
    }
  }

  sort(event) {
    let sorter = event.target.id
    this.setState({sort: sorter})
  }

  filter(event) {
    let filterer = event.target.id
    this.setState({filter: filterer})
  }

  arrowUp() {
    this.setState({order: 'asc'})
  }

  arrowDown() {
    this.setState({order: 'desc'})
  }

  render() {

return (<div className="h-screen bg-orange">

  <div className="flex border-b-2 border-orange-dark">
    <svg  className="w-1/12 pt-2"xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1200 1200">
      <path class="cls-1" d="M525,225S623-11,698,32s68,61,68,61-81.274-6.335-91,32c-12.884,50.784,19,105,19,105-49,52-94,70-94,70Z"/>
      <path class="cls-2" d="M975-150"/>
      <path class="cls-3" d="M450,257s-94.709-100-256,8C-57.394,433.329,4.836,793.347,96,948c132.247,224.35,293.419,90.99,343,98,28.493,4.03,86.136,41.49,161,46,83,5,175.941-48.01,204-44,68.45,9.79,88.745,38.53,186,14,257.19-64.872,304.44-789.96-31-855-123.188-23.886-188,49.309-188,49,0,0-110.669-73.722-182.212-47.477C507.838,238.218,448.874,260.064,450,257Z"/>
      <ellipse class="cls-4" cx="429" cy="465" rx="54" ry="90"/>
      <ellipse class="cls-4" cx="762.5" cy="487.5" rx="62.5" ry="112.5"/>
      <path class="cls-5" d="M321,710s279,85.5,429,40,124.086,41.788,75,75c-76.26,51.6-280.454,25.719-408.21-19.172C333.517,776.567,282.72,739.227,321,710Z"/>
      <path class="cls-6" d="M300,900s0,101.5,75,40S488,825,488,825s-6-23.756-53-51-82-9-82-9Z"/>
      <path class="cls-7" d="M375-150"/>
      <path class="cls-8" d="M-450,300"/>
    </svg>
    <h1 className=" flex w-5/6 justify-center bg-orange  k pt-4 font-halloween text-5xl">THE HALLOWEEN CANDY APP</h1>
    <div className="w-1/12"></div>
  </div>
  <div className=" flex h-10 ">
    <div className="w-1/12"></div>
    <div className="  bg-black mt-2 w-5/6 justify-center rounded- h-8 pt-1 text-white text-center">Sort, rank and filter Trick'or Treats most popular sweets</div>
    <div className="w-1/12"></div>
  </div>

  <div className=" flex justify-center bg-orange w-full">
    <div className="w-5/6 bg-orange">
      <div className="flex justify-center">

        <div className="flex w-1/6 justify-start text-center bg-orange flex-col my-2">

          <Sort order={this.state.order} sort={this.sort} arrowUp={this.arrowUp} arrowDown={this.arrowDown}/>

          <Filter filter={this.filter}/>

        </div>

        <div className="w-5/6">
          <Candylist candies={candies} filter={this.state.filter} order={this.state.order} sort={this.state.sort}/>
        </div>

      </div>

    </div>

  </div>

  <div className="bg-black text-white text-center py-2">
    Fueld by &nbsp;
    <a className="text-red" href="https://fivethirtyeight.com/features/the-ultimate-halloween-candy-power-ranking/" target="_blank">The Ultimate Halloween Candy Power Ranking</a>
    , using research and data provided by &nbsp;
    <a className="text-red" href="https://fivethirtyeight.com/" target="_blank">fivethirtyeight.com</a>
  </div>
</div>)
}
}
export default App;

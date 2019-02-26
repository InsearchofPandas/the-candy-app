import React, {Component} from 'react';

const _ = require('lodash');

class Candylist extends Component {
  // competitorname winpercent sugarpercent pricepercent

  sorter(sort) {
    let sorter
    if (sort === 'competitorname') {
      sorter = 'name';
      return sorter
    } else if (sort === 'winpercent') {
      sorter = 'popularity';
      return sorter
    } else if (sort === 'sugarpercent') {
      sorter = 'sugar content';
      return sorter
    } else if (sort === 'pricepercent') {
      sorter = 'price';
      return sorter
    }
  }

  orderer(sort, order) {
    let orderer
    if (sort === 'competitorname' && order === 'asc') {
      orderer = 'A to Z';
      return orderer
    } else if (sort === 'competitorname' && order === 'desc') {
      orderer = 'Z to A';
      return orderer
    } else if (sort === 'winpercent' && order === 'asc') {
      orderer = 'Low to High';
      return orderer
    } else if (sort === 'winpercent' && order === 'desc') {
      orderer = 'High to Low';
      return orderer
    } else if (sort === 'sugarpercent' && order === 'asc') {
      orderer = 'Low to High';
      return orderer
    } else if (sort === 'sugarpercent' && order === 'desc') {
      orderer = 'High to Low';
      return orderer
    } else if (sort === 'pricepercent' && order === 'asc') {
      orderer = 'Low to High';
      return orderer
    } else if (sort === 'pricepercent' && order === 'desc') {
      orderer = 'High to Low';
      return orderer
    }
  }

filterer(filter) {
  let filterer
  if (filter === 'none') {
    return
  } else if (filter === 'chocolate') {
    filterer = 'filtered by: chocolate';
    return filterer
  } else if (filter === 'fruity') {
    filterer = 'filtered by: fruity';
    return filterer
  } else if (filter === 'peanutyalmondy') {
    filterer = 'filtered by: nutty';
    return filterer
  } else if (filter === 'nougat') {
    filterer = 'filtered by: nougat';
    return filterer
  } else if (filter === 'crispedricewafer') {
    filterer = 'filtered by: crisped rice / wafer';
    return filterer
  } else if (filter === 'hard') {
    filterer = 'filtered by: hard candy';
    return filterer
  } else if (filter === 'bar') {
    filterer = 'filtered by: bar based';
    return filterer
  } else if (filter === 'pluribus') {
    filterer = 'filtered by: pieces';
    return filterer
  }
}

  render() {

    let sorted = _.orderBy(this.props.candies, [this.props.sort], [this.props.order])


    let filtered
    if (this.props.filter === 'none') {
      filtered = sorted
    } else {
      filtered = _.filter(sorted, [this.props.filter, "1"])
    }

    let rainbow = [
      "bg-red-light",
      "bg-orange-light",
      "bg-yellow-light",
      "bg-green-light",
      "bg-blue-light",
      "bg-indigo-light",
      "bg-purple-light"
    ]
    let candyList = []
    let i
    let color = 0
    for (i = 0; i < filtered.length; i++) {
      if (color > 6) {
        color = 0
      }
      candyList.push(<div key={i} className={"flex border rounded-sm " + rainbow[color] + "est"}>
        <div className={" text-center w-1\/10 " + rainbow[color]}>{(i + 1)}</div>
        <div className="px-1 p-75  w-9\/10">{filtered[i].competitorname}</div>
      </div>)
      color++
    }

    let newList = _.chunk(candyList, Math.ceil(candyList.length / 3))

    return (<div className="bg-grey-orange  opacity-95 rounded-lg p-3 m-3">
      <div className="w-full h-10 text-white bg-black rounded-sm pt-1 px-16 ">
        <h2>
          <span className="text-pink-hypsat">Candy</span> sorted by <span className="text-purple-hypsat">{this.sorter(this.props.sort)}</span>&nbsp;
          {this.orderer(this.props.sort, this.props.order)}&nbsp;<span className="text-red">{this.filterer(this.props.filter)}</span>
        </h2>
      </div>
      <div className="flex">
        <div className=" p-2  w-1/3 ">
          {newList[0]}
        </div>
        <div className=" p-2  w-1/3 ">
          {newList[1]}
        </div>
        <div className=" p-2  w-1/3 ">
          {newList[2]}
        </div>
      </div>
    </div>)
  }
}

export default Candylist;

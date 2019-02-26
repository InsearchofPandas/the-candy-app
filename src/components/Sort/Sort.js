import React from 'react';

class Sort extends React.Component {
  render() {
    return(<div className="bg-grey-orange border-2 border-white opacity-95 rounded-lg p-3 my-1">
      <h2 className="">Sort</h2>
      <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='competitorname' onClick={this.props.sort}>Name</div>
      <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='winpercent' onClick={this.props.sort}>Popularity</div>
      <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='sugarpercent' onClick={this.props.sort}>Sugar Content</div>
      <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='pricepercent' onClick={this.props.sort}>Price</div>
      <div className="flex text-black bg-black pt-1 ">
      <div className={this.props.order === "asc"
          ? "text-white"
          : "text-grey-dark" + " hover:text-purple-darker"}>
          <svg className="fill-current my-1 mx-.5 ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 1200 1200" onClick={this.props.arrowUp}>
            <path className="" d="M601,8c14.333,0,381.667,873.667,370,890-3.333,9.667-215-6-218,2s-2,302-2,302H446s0-294.333,2-302-207,9.333-219-2S586.667,8,601,8Z"/>
          </svg>
        </div>
        <div className={this.props.order === "desc"
            ? "text-white"
            : "text-grey-dark" + " hover:text-purple-darker"}>
          <svg className="fill-current my-1 mx-.5" xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 1200 1200" onClick={this.props.arrowDown}>
            <path className="" d="M599,1196c-14.333,0-381.667-873.667-370-890,3.333-9.667,215,6,218-2S449,2,449,2H754s0,294.333-2,302,207-9.333,219,2S613.333,1196,599,1196Z"/>
          </svg>
        </div>
        <p className="pl-5 text-white">Sort Order</p>
      </div>
    </div>)
  }
}

export default Sort;

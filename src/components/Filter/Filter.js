import React from 'react';

class Filter extends React.Component {
  render() {
    return(
      <div className="bg-grey-orange border-2 border-white opacity-95 rounded-lg p-3 my-1">
        <h2>Filter</h2>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='none' onClick={this.props.filter}>None</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='chocolate' onClick={this.props.filter}>Chocolate</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='fruity' onClick={this.props.filter}>Fruity</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='peanutyalmondy' onClick={this.props.filter}>Nutty</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='nougat' onClick={this.props.filter}>Nougat</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='crispedricewafer' onClick={this.props.filter}>Crisped Rice / Wafer</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='hard' onClick={this.props.filter}>Hard Candy</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='bar' onClick={this.props.filter}>Bar Based</div>
        <div className="border border-black p-75 my-50 rounded-sm bg-white-orange hover:bg-orange-dark" id='pluribus' onClick={this.props.filter}>Pieces</div>
      </div>
    )
  }
}

export default Filter;

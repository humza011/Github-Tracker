import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text : ''
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchUser(this.state.text)
        this.setState({text : ''})
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit = {this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." onChange = {this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>}
            </div>
        )
    }
}

export default Search
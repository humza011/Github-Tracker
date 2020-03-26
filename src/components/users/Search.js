import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUser, showClear, clearUser, setAlert}) => {
    // state = {
    //     text : ''
    // }
    /* Using hooks */
    const [text, setText] = useState('');
    
    // const onChange = (e) => {
    //     this.setState({ [e.target.name] : e.target.value})
    // }

    const onChange = (e) => {
         setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === '') {
            setAlert('Please enter user to search','danger')
        } else {
        searchUser(text)
        setText('')
        }
    }
  
        return (
            <div>
                <form className="form" onSubmit = {onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange = {onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUser}>Clear</button>}
            </div>
        )
    
}

Search.propTypes = {
    searchUser : PropTypes.func.isRequired,
    clearUser : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired
}

export default Search
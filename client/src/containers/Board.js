import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Board.css'

class Board extends PureComponent {

  render() {

    const {currentUser} = this.props
    return (
      <div className='Board'>
        { currentUser &&
          <div>
            <p>test123</p>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Board)

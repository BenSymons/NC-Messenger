import React, { Component } from 'react'


class ChatRoom extends Component {

    state = {
        messageLog: [{avatar: 'https://viralcats.net/blog/wp-content/uploads/2017/12/Mean-looking-cat-Viral-Cats-03.jpg', username: 'Sam', body: 'new message'}],
        newMessage: ''
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            newMessage: value
        })
    }

    handleSend = (event) => {
        event.preventDefault();
        this.setState(currentState => {
            return {
            messageLog: [...currentState.messageLog, {username: this.props.username, avatar: 'https://viralcats.net/blog/wp-content/uploads/2017/12/Mean-looking-cat-Viral-Cats-03.jpg', body: this.state.newMessage}]
            }
        })
    }


    render() {
        const { messageLog } = this.state
        return (
            <div>
            {messageLog.map(message => {
                return (
                <section>
                    <p><img src={message.avatar} alt='user avatar'></img><span>{message.username}</span></p>
                    <p>{message.body}</p>
                </section>
                )
            })}
            <form>
                <input onChange={this.handleChange}></input>
                <button onClick={this.handleSend}>Send</button> 
            </form>
            </div>
        )
    }

}

export default ChatRoom;
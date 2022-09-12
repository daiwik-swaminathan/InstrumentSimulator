import React from 'react'
import './Key.css'
import {LEFT_NOTE_TO_KEY, RIGHT_NOTE_TO_KEY} from '../global/constants.js'

class Key extends React.Component
{
    handleClick(note)
    {
        const noteAudio = new Audio(document.getElementById(note).src)
        noteAudio.play()
    }
    render()
    {
        let keyClassName = 'key'
        let isFlat = false

        if(this.props.note.length > 2)
        {
            keyClassName = 'key-flat'
            isFlat = true
        }

        // let noteMajorNum = parseInt(this.props.note.charAt(this.props.note.length - 1), 10)
        let noteMajorNum = parseInt(this.props.note.slice(-1), 10)

        if(noteMajorNum === this.props.leftMajorNum)
        {
            let keyIsPressed = this.props.pressedKeys.includes(LEFT_NOTE_TO_KEY[this.props.note.slice(0, -1)])

            if(keyIsPressed)
            {
                keyClassName += '-pressed'
            }
        }
        if(noteMajorNum === this.props.rightMajorNum)
        {
            let keyIsPressed = this.props.pressedKeys.includes(RIGHT_NOTE_TO_KEY[this.props.note.slice(0, -1)])

            if(keyIsPressed)
            {
                keyClassName += '-pressed'
            }
        }
        if(noteMajorNum !== this.props.leftMajorNum && noteMajorNum !== this.props.rightMajorNum)
        {
            keyClassName += '-not-playable'
        }

        let key;

        if(isFlat)
        {
            key = (
                <div className={keyClassName} style={{cursor : 'pointer'}} onClick={() => this.handleClick(this.props.note)}></div>
            )
        }
        else
        {
            key = (
                <div className={keyClassName} style={{cursor : 'pointer'}} onClick={() => this.handleClick(this.props.note)}>
                    <div className='key-text'>{this.props.note}</div>
                </div>
            )
        }

        return key

        // return (
        //     <div className='key'>
        //         <div className='key-text'>
        //             {this.props.note}
        //         </div>
        //     </div>
        // )


    }
    
}

export { Key }
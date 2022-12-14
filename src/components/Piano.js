import React from 'react'
import {Key} from './Key.js'
import {NOTES, VALID_KEYS, LEFT_KEY_TO_NOTE, RIGHT_KEY_TO_NOTE} from '../global/constants.js'
import './Piano.css'

class Piano extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            pressedKeys: [],
            leftMajorNum: 4,
            rightMajorNum: 5
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown)
        window.addEventListener('keyup', this.handleKeyUp)
    }

    // re-work multiple key down
    handleKeyDown = (event) => {
        if (event.repeat) 
        {
            return
        }
        const key = event.key

        if(key === 'ArrowUp' && this.state.rightMajorNum <= 7)
        {
            let newMajorNum = this.state.rightMajorNum + 1
            this.setState({
                rightMajorNum: newMajorNum
            })
        }

        if(key === 'ArrowDown' && this.state.rightMajorNum > this.state.leftMajorNum + 0)
        {
            let newMajorNum = this.state.rightMajorNum - 1
            this.setState({
                rightMajorNum: newMajorNum
            })
        }

        if(key === 'ArrowLeft' && this.state.leftMajorNum >= 1)
        {
            let newMajorNum = this.state.leftMajorNum - 1
            this.setState({
                leftMajorNum: newMajorNum
            })
        }

        if(key === 'ArrowRight' && this.state.leftMajorNum < this.state.rightMajorNum - 0)
        {
            let newMajorNum = this.state.leftMajorNum + 1
            this.setState({
                leftMajorNum: newMajorNum
            })
        }

        // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
        
        const updatedPressedKeys = [...this.state.pressedKeys]
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) 
        {
            updatedPressedKeys.push(key)

            this.setState({
                pressedKeys: updatedPressedKeys
            })

            let note = LEFT_KEY_TO_NOTE[key]
            if(note)
            {
                const noteAudio = new Audio(document.getElementById(note+this.state.leftMajorNum).src)
                noteAudio.play()
            }

            note = RIGHT_KEY_TO_NOTE[key]
            if(note)
            {
                const noteAudio = new Audio(document.getElementById(note+(this.state.rightMajorNum)).src)
                noteAudio.play()
            }
        }
    }

    handleKeyUp = (event) => {
        let updatedPressedKeys = [...this.state.pressedKeys]
        const index = this.state.pressedKeys.indexOf(event.key)
        
        if (index > -1) 
        {
            updatedPressedKeys.splice(index, 1)
            
            this.setState({
                pressedKeys: updatedPressedKeys
            })
        }
    }

    render()
    {
        // const keys1 = NOTES.map( (note, index) => {
        //     return (
        //         <Key key={index} note={note+this.state.majorNum} pressedKeys={this.state.pressedKeys}></Key>
        //     )
        // })

        // const keys2 = NOTES.map( (note, index) => {
        //     return (
        //         <Key key={index+12} note={note+(+this.state.majorNum+1)} pressedKeys={this.state.pressedKeys}></Key>
        //     )
        // })

        // const keys = keys1.concat(keys2)

        var keys = []
        var audioFiles = []

        keys.push(<Key key={0} note={'A0'} pressedKeys={this.state.pressedKeys} leftMajorNum={this.state.leftMajorNum} rightMajorNum={this.state.rightMajorNum}></Key>)
        keys.push(<Key key={1} note={'Bb0'} pressedKeys={this.state.pressedKeys} leftMajorNum={this.state.leftMajorNum} rightMajorNum={this.state.rightMajorNum}></Key>)
        keys.push(<Key key={2} note={'B0'} pressedKeys={this.state.pressedKeys} leftMajorNum={this.state.leftMajorNum} rightMajorNum={this.state.rightMajorNum}></Key>)

        audioFiles.push(<audio id={'A0'} key={0} src={`../../notes/${'A0'}.mp3`}></audio>)
        audioFiles.push(<audio id={'Bb0'} key={1} src={`../../notes/${'Bb0'}.mp3`}></audio>)
        audioFiles.push(<audio id={'B0'} key={2} src={`../../notes/${'B0'}.mp3`}></audio>)

        let keyID = 3
        for(let i=1; i<8; i++)
        {
            for(let j=0; j<NOTES.length; j++, keyID++)
            {
                keys.push(<Key key={keyID} note={NOTES[j]+i} pressedKeys={this.state.pressedKeys} leftMajorNum={this.state.leftMajorNum} rightMajorNum={this.state.rightMajorNum}></Key>)
                audioFiles.push(<audio id={NOTES[j]+i} key={keyID} src={`../../notes/${NOTES[j]+i}.mp3`}></audio>)
            }
        }

        keys.push(<Key key={87} note={'C8'} pressedKeys={this.state.pressedKeys} leftMajorNum={this.state.leftMajorNum} rightMajorNum={this.state.rightMajorNum}></Key>)
        audioFiles.push(<audio id={'C8'} key={87} src={`../../notes/${'C8'}.mp3`}></audio>)

        // const audioFiles = NOTES.map( (note, index) => {
        //     return (
        //         <audio id={note} key={index} src={`../../notes/${note}.mp3`}></audio>
        //     )
        // }) 

        return (
            <div className='piano-container'>
                <div className='piano'>
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </div>
        )
    }
    
}

export { Piano }
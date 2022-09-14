import React from 'react'
import './MainPage.css'
import {InstrumentChooser} from '../components/InstrumentChooser.js'
import { Piano } from '../components/Piano.js'

class MainPage extends React.Component
{
    constructor(props)
    {
        super(props)

        this.handler = this.handler.bind(this)

        this.state = {
            pianoSelect: false
        }
    }
    handler()
    {
        console.log('piano clicked')
        this.setState({
            pianoSelect: true
        })
    }

    render()
    {
        if(this.state.pianoSelect)
        {
            return (
                <div>
                    <InstrumentChooser handler={this.handler}></InstrumentChooser>
                    <Piano></Piano>
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <p>Select an instrument.</p>
                    <InstrumentChooser handler={this.handler}></InstrumentChooser>
                </div>
            )
        }
    }
    
}

export { MainPage }
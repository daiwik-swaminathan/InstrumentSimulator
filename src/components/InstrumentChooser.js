import React from 'react'
import './InstrumentChooser.css'

class InstrumentChooser extends React.Component
{
    render()
    {
        return (
            <div>
                <button onClick={() => this.props.handler()}>Piano</button>
                <button>Alto Saxophone</button>
            </div>
        )
    }
    
}

export { InstrumentChooser }
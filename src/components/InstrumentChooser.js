import React from 'react'
import './InstrumentChooser.css'

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'

class InstrumentChooser extends React.Component
{
    render()
    {
        return (
            <div>
                <Button variant="primary" onClick={() => this.props.handler()}>Piano</Button>{' '}
                <Button variant="secondary">Alto Saxophone</Button>
            </div>
        )
    }
    
}

export { InstrumentChooser }
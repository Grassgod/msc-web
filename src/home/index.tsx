import React from 'react';
import './index.css';
import PopPaper from '../components/POP'
import Navigation from '../components/menu'

interface IState {
    current: string
}

export default class Home extends React.Component<any, IState> {
    constructor(props: IState) {
        super(props);
        this.state = {
          current: 'home',
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="paper_conatiner">
                    <PopPaper />
                </div>
            </div>
        )
    }
} 
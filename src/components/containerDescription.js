import React, { Component } from 'react';
import { Containers } from '../const/containerTypes'
import { BioContainer } from './containers/bioContainer'
import { GlassContainer } from './containers/glassContainer'
import { MixedContainer } from './containers/mixedContainer'
import { PlasticAndMetalsContainer } from './containers/plasticAndMetalsContainer'
import { PaperContainer } from './containers/paperContainer'

export class ContainerDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { container: props.container, containerTypes: Containers };
    }

    componentWillReceiveProps(props) {
        this.setState({ container: props.container })
    }

    render() {
        let container;
        switch (this.state.container) {
            case this.state.containerTypes.BIO:
                container = <BioContainer />;
                break;
            case this.state.containerTypes.GLASS:
                container = <GlassContainer />;
                break;
            case this.state.containerTypes.MIXED:
                container = <MixedContainer />;
                break;
            case this.state.containerTypes.PLASTICANDMETALS:
                container = <PlasticAndMetalsContainer />;
                break;
            case this.state.containerTypes.PAPER:
                container = <PaperContainer />;
                break;
            case this.state.containerTypes.OTHER:
                container = <label>inne</label>;
                break;
            default:
                container = <label></label>;
        }

        return (
            <div>
                {container}
            </div>
        );
    }
}
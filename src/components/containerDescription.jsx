import React, { Component } from 'react';
import { Containers } from '../const/containerTypes'
import { BioContainer } from './containers/bioContainer'
import { GlassContainer } from './containers/glassContainer'
import { MixedContainer } from './containers/mixedContainer'
import { PlasticAndMetalsContainer } from './containers/plasticAndMetalsContainer'
import { PaperContainer } from './containers/paperContainer'
import { ElectronicWastes } from './containers/electronicWastes';
import { DangerousWastes } from './containers/dangerousWastes';
import { HugeWastes } from './containers/hugeWastes';
import { OtherWastes } from './containers/otherWastes';

export class ContainerDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { garbage: props.garbage, containerTypes: Containers };
    }

    componentWillReceiveProps(props) {
        this.setState({ garbage: props.garbage })
    }

    render() {
        let container;

        if (!this.state.garbage) {
            this.state.garbage = { name: '', additionalInfo: '' }
        }

        switch (this.state.garbage.container) {
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
            case this.state.containerTypes.DANGEROUS:
                container = <DangerousWastes />;
                break;
            case this.state.containerTypes.ELECTRONIC:
                container = <ElectronicWastes />;
                break;
            case this.state.containerTypes.HUGEWASTES:
                container = <HugeWastes />;
                break;
            case this.state.containerTypes.SELECTIVEWASTES:
                container = <OtherWastes />;
                break;
            case this.state.containerTypes.OTHER:
                container = <OtherWastes />;
                break;
            default:
                container = <label></label>;
        }

        return (
            <div>
                <div>
                    {container}
                </div>
                <div>
                    {this.state.garbage.additionalInfo}
                </div>
            </div>
        );
    }
}
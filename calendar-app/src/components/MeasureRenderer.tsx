import * as React from "react";

type Props = {
    name: string
};
type State = {
    mounted: boolean
};

export default class MeasureRenderer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            mounted: false
        };
    }

    render() {
        const {name} = this.props;
        if (this.state.mounted) {
            window.performance.mark(`${name}UpdateStart`);
        } else {
            window.performance.mark(`${name}MountStart`);
        }
        return this.props.children;
    }

    componentDidMount() {
        const {name} = this.props;
        this.setState({...this.state, mounted: true});
        window.performance.mark(`${name}MountEnd`);
        window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`);
    }

    componentDidUpdate() {
        const {name} = this.props;
        window.performance.mark(`${name}UpdateEnd`);
        window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`);
        const measures = window.performance.getEntriesByType('measure');
        console.log((measures.filter(t => t.duration > 500)), window.location.href);
    }
};
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Connection from "../Api/Connection";
import Func from "../Api/Data/Func";
import Region from "../Api/Data/Region";
import BuffIcon from "../Component/BuffIcon";
import Loading from "../Component/Loading";
import FuncMainData from "./Func/FuncMainData";

interface IProps {
    region: Region;
    id: number;
}

interface IState {
    loading: boolean;
    func?: Func;
}

class FuncPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.loadFunc();
    }

    async loadFunc() {
        const func = await Connection.func(this.props.region, this.props.id);

        this.setState({
            loading: false,
            func: func,
        });
    }

    render() {
        if (this.state.loading || !this.state.func)
            return <Loading/>;

        const func = this.state.func;

        return (
            <div>
                <h1>
                    {func.funcPopupIcon ? (
                        <span>
                            <BuffIcon location={func.funcPopupIcon} height={48}/>
                            &nbsp;
                        </span>
                    ) : null}
                    Function: {this.props.id}
                </h1>
                <br/>

                <FuncMainData region={this.props.region} func={func}/>

                <Row>
                    <Col xs={12} lg={6}>
                        <h3>Related Skills</h3>
                        {func.reverseSkills.map((skill, index) => {
                            return (
                                <p key={index}>
                                    <BuffIcon location={skill.icon}/>
                                    &nbsp;
                                    {skill.name}
                                    &nbsp;
                                    <Link to={`/${this.props.region}/skill/${skill.id}`}>
                                        <FontAwesomeIcon icon={faShare}/>
                                    </Link>
                                </p>
                            )
                        })}
                    </Col>
                    <Col xs={12} lg={6}>
                        <h3>Related Noble Phantasms</h3>
                        {func.reverseTds.map((noblePhantasm, index) => {
                            return (
                                <p key={index}>
                                    {noblePhantasm.name}
                                    &nbsp;
                                    <Link to={`/${this.props.region}/noble-phantasm/${noblePhantasm.id}`}>
                                        <FontAwesomeIcon icon={faShare}/>
                                    </Link>
                                </p>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FuncPage;

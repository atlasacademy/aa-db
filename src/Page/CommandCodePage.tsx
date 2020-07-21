import {AxiosError} from "axios";
import React from "react";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";
import Connection from "../Api/Connection";
import CommandCode from "../Api/Data/CommandCode";
import Region from "../Api/Data/Region";
import TraitMap from "../Api/Data/TraitMap";
import SkillBreakdown from "../Breakdown/SkillBreakdown";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import CommandCodeMainData from "./CommandCode/CommandCodeMainData";
import CommandCodePicker from "./CommandCode/CommandCodePicker";
import CommandCodePortrait from "./CommandCode/CommandCodePortrait";

interface IProps extends RouteComponentProps {
    region: Region;
    id: number;
    tab?: string;
}

interface IState {
    error?: AxiosError;
    loading: boolean;
    id: number;
    commandCodes: CommandCode[];
    commandCode?: CommandCode;
}

class CommandCodePage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            id: this.props.id,
            commandCodes: [],
        };
    }

    componentDidMount() {
        this.loadCraftEssence();
    }

    async loadCraftEssence() {
        try {
            let [commandCodes, commandCode] = await Promise.all<CommandCode[], CommandCode, TraitMap>([
                Connection.commandCodeList(this.props.region),
                Connection.commandCode(this.props.region, this.state.id),
                Connection.traitMap(this.props.region)
            ]);

            this.setState({
                loading: false,
                commandCodes,
                commandCode
            });
        } catch (e) {
            this.setState({
                error: e
            });
        }
    }

    render() {
        if (this.state.error)
            return <ErrorStatus error={this.state.error}/>;

        if (this.state.loading || !this.state.commandCode)
            return <Loading/>;

        const commandCode = this.state.commandCode;

        return (
            <div>
                <CommandCodePicker region={this.props.region}
                                   commandCodes={this.state.commandCodes}
                                   id={commandCode.id}/>
                <hr/>

                <Row>
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                        <CommandCodeMainData commandCode={commandCode}/>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <CommandCodePortrait commandCode={commandCode}/>
                    </Col>
                </Row>

                <Tabs id={'ce-tabs'} defaultActiveKey={this.props.tab ?? 'effects'} transition={false}
                      onSelect={(key: string) => {
                          this.props.history.replace(`/${this.props.region}/command-code/${this.props.id}/${key}`);
                      }}>
                    <Tab eventKey={'effects'} title={'Effects'}>
                        <br/>
                        {commandCode.skills
                            .map((skill, index) => {
                                return (
                                    <SkillBreakdown key={index}
                                                    region={this.props.region}
                                                    skill={skill}
                                                    cooldowns={false}/>
                                );
                            })}
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default withRouter(CommandCodePage);
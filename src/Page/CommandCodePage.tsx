import {CommandCode, Region, Trait} from "@atlasacademy/api-connector";
import CommandCodeBasic from "@atlasacademy/api-connector/dist/Schema/CommandCodeBasic";
import {AxiosError} from "axios";
import React from "react";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";
import Api from "../Api";
import SkillBreakdown from "../Breakdown/SkillBreakdown";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import Manager from "../Setting/Manager";
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
    commandCodes: CommandCodeBasic[];
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
        Manager.setRegion(this.props.region);
        this.loadCraftEssence();
    }

    async loadCraftEssence() {
        try {
            let [commandCodes, commandCode] = await Promise.all<CommandCodeBasic[], CommandCode, Trait[]>([
                Api.commandCodeList(),
                Api.commandCode(this.state.id),
                Api.traitList()
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
                        <CommandCodeMainData region={this.props.region} commandCode={commandCode}/>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <CommandCodePortrait commandCode={commandCode}/>
                    </Col>
                </Row>

                <Tabs id={'ce-tabs'} defaultActiveKey={this.props.tab ?? 'effects'} transition={false}
                      onSelect={key => {
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

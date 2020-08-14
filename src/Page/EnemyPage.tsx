import {Region, Servant, Trait} from "@atlasacademy/api-connector";
import Enemy from "@atlasacademy/api-connector/dist/Schema/Enemy";
import {AxiosError} from "axios";
import React from "react";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";
import Api from "../Api";
import NoblePhantasmBreakdown from "../Breakdown/NoblePhantasmBreakdown";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import Manager from "../Setting/Manager";
import EnemyMainData from "./Enemy/EnemyMainData";
import EnemySubData from "./Enemy/EnemySubData";
import ServantStatGrowth from "./Servant/ServantStatGrowth";

interface IProps extends RouteComponentProps {
    region: Region;
    id: number;
    tab?: string;
}

interface IState {
    error?: AxiosError;
    loading: boolean;
    id: number;
    enemy?: Enemy;
}

class EnemyPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            id: this.props.id,
        };
    }

    componentDidMount() {
        Manager.setRegion(this.props.region);
        this.loadEnemy();
    }

    async loadEnemy() {
        try {
            let [enemy] = await Promise.all<Enemy, Trait[]>([
                Api.enemy(this.state.id),
                Api.traitList()
            ]);

            this.setState({
                loading: false,
                enemy,
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

        if (this.state.loading || !this.state.enemy)
            return <Loading/>;

        const enemy = this.state.enemy;

        return (
            <div id={'enemy'}>
                <h1>{enemy.name}</h1>

                <Row>
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                        <EnemyMainData region={this.props.region}
                                       enemy={enemy}/>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <EnemySubData region={this.props.region}
                                      enemy={enemy}/>
                    </Col>
                </Row>

                <Tabs id={'enemy-tabs'} defaultActiveKey={this.props.tab ?? 'noble-phantasms'} transition={false}
                      onSelect={key => {
                          this.props.history.replace(`/${this.props.region}/enemy/${this.props.id}/${key}`);
                      }}>
                    <Tab eventKey={'noble-phantasms'} title={'Noble Phantasms'}>
                        <br/>
                        {enemy.noblePhantasms
                            .map((noblePhantasm, index) => {
                                return <NoblePhantasmBreakdown key={index}
                                                               region={this.props.region}
                                                               servant={enemy as unknown as Servant}
                                                               noblePhantasm={noblePhantasm}
                                                               hideCard={true}
                                                               hideGain={true}/>;
                            })}
                    </Tab>
                    <Tab eventKey={'stat-growth'} title={'Stat Growth'}>
                        <br/>
                        <ServantStatGrowth region={this.props.region} servant={enemy as unknown as Servant}/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default withRouter(EnemyPage);

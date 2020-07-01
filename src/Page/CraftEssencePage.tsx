import React from "react";
import {Col, Row} from "react-bootstrap";
import Connection from "../Api/Connection";
import BasicListEntity from "../Api/Data/BasicListEntity";
import CraftEssence from "../Api/Data/CraftEssence";
import Region from "../Api/Data/Region";
import TraitMap from "../Api/Data/TraitMap";
import Loading from "../Component/Loading";
import CraftEssenceMainData from "./CraftEssence/CraftEssenceMainData";
import CraftEssencePicker from "./CraftEssence/CraftEssencePicker";
import CraftEssencePortrait from "./CraftEssence/CraftEssencePortrait";
import CraftEssenceSkill from "./CraftEssence/CraftEssenceSkill";

interface IProps {
    region: Region;
    id: number;
}

interface IState {
    loading: boolean;
    id: number;
    craftEssences: BasicListEntity[];
    craftEssence?: CraftEssence;
}

class CraftEssencePage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            id: this.props.id,
            craftEssences: [],
        };
    }

    componentDidMount() {
        this.loadServant();
    }

    async loadServant() {
        let [craftEssences, craftEssence] = await Promise.all<BasicListEntity[], CraftEssence, TraitMap>([
            Connection.craftEssenceList(this.props.region),
            Connection.craftEssence(this.props.region, this.state.id),
            Connection.traitMap(this.props.region)
        ]);

        this.setState({
            loading: false,
            craftEssences,
            craftEssence
        });
    }

    render() {
        if (this.state.loading || !this.state.craftEssence)
            return <Loading/>;

        return (
            <div>
                <CraftEssencePicker region={this.props.region}
                                    craftEssences={this.state.craftEssences}
                                    id={this.state.craftEssence.collectionNo}/>
                <hr/>

                <Row>
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                        <CraftEssenceMainData craftEssence={this.state.craftEssence}/>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <CraftEssencePortrait craftEssence={this.state.craftEssence}/>
                    </Col>
                </Row>

                <br/>
                <Row>
                    {this.state.craftEssence.skills
                        .filter(skill => skill.num === 1)
                        .map((skill, index) => {
                            return (
                                <Col key={index} xs={12} lg={6}>
                                    <CraftEssenceSkill region={this.props.region} skill={skill}/>
                                </Col>
                            );
                        })}
                </Row>
            </div>
        );
    }
}

export default CraftEssencePage;
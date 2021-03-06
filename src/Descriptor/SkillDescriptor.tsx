import {Region, Skill} from "@atlasacademy/api-connector";
import React from "react";
import {Link} from "react-router-dom";
import BuffIcon from "../Component/BuffIcon";

interface IProps {
    region: Region;
    skill: Skill.Skill;
    iconHeight?: number;
}

class SkillDescriptor extends React.Component<IProps> {
    static renderAsString(skill: Skill.Skill): string {
        const name = skill.name ? skill.name : `Skill: ${skill.id}`;

        return `[${name}]`;
    }

    render() {
        return (
            <Link to={`/${this.props.region}/skill/${this.props.skill.id}`}>
                {this.props.skill.icon ? (
                    <BuffIcon location={this.props.skill.icon} height={this.props.iconHeight}/>
                ) : undefined}
                {this.props.skill.icon ? ' ' : undefined}
                [{this.props.skill.name ? this.props.skill.name : `Skill: ${this.props.skill.id}`}]
            </Link>
        );
    }
}

export default SkillDescriptor;

import React from "react";
import {BuffType} from "../../Api/Data/Buff";
import Func, {DataVal, FuncType} from "../../Api/Data/Func";
import Region from "../../Api/Data/Region";
import BuffValueDescriptor from "../BuffValueDescriptor";
import FuncValueDescriptor from "../FuncValueDescriptor";
import SkillReferenceDescriptor from "../SkillReferenceDescriptor";
import TraitDescriptor from "../TraitDescriptor";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (region: Region, sections: FuncDescriptorSections, func: Func, dataVal: DataVal): void {
    const section = sections.amount,
        parts = section.parts;

    if (func.buffs[0]?.type === BuffType.ADD_INDIVIDUALITY && typeof dataVal.Value === "number") {
        parts.push(
            <TraitDescriptor region={region} trait={dataVal.Value}/>
        );
    } else if (
        (
            func.buffs[0]?.type === BuffType.ATTACK_FUNCTION
            || func.buffs[0]?.type === BuffType.COMMANDATTACK_FUNCTION
            || func.buffs[0]?.type === BuffType.COMMANDATTACK_BEFORE_FUNCTION
            || func.buffs[0]?.type === BuffType.DAMAGE_FUNCTION
            || func.buffs[0]?.type === BuffType.DEAD_FUNCTION
            || func.buffs[0]?.type === BuffType.DELAY_FUNCTION
            || func.buffs[0]?.type === BuffType.SELFTURNEND_FUNCTION
        )
        && typeof dataVal.Value === "number"
    ) {
        section.preposition = undefined;
        parts.push('that triggers');
        parts.push(
            <SkillReferenceDescriptor region={region} id={dataVal.Value}/>
        );
    } else if (func.funcType === FuncType.CARD_RESET && dataVal.Value) {
        section.preposition = undefined;
        parts.push(`${dataVal.Value} time${dataVal.Value > 1 ? 's' : ''}`);
    } else if (func.funcType === FuncType.DAMAGE_NP_INDIVIDUAL_SUM) {
        parts.push(<FuncValueDescriptor region={region} func={func} dataVal={dataVal} hideRate={true}/>);
    } else if (func.funcType === FuncType.GAIN_HP_FROM_TARGETS) {
        section.showing = false;
    } else if (func.funcType === FuncType.GAIN_NP_FROM_TARGETS) {
        const chargeAmount = dataVal.DependFuncVals?.Value2;

        if (chargeAmount !== undefined) {
            parts.push(<FuncValueDescriptor region={region} func={func} dataVal={dataVal} hideRate={true}/>);
        } else {
            section.showing = false;
        }
    } else if (func.buffs[0]?.type === BuffType.NPATTACK_PREV_BUFF) {
        if (typeof dataVal.SkillID !== "number") {
            section.showing = false;
            return;
        }

        section.preposition = undefined;
        parts.push('that triggers');
        parts.push(
            <SkillReferenceDescriptor region={region} id={dataVal.SkillID}/>
        );
    } else if (func.buffs[0] && dataVal.Value) {
        parts.push(<BuffValueDescriptor region={region} buff={func.buffs[0]} dataVal={dataVal}/>);
    } else if (dataVal.Value) {
        parts.push(<FuncValueDescriptor region={region} func={func} dataVal={dataVal} hideRate={true}/>);
    } else {
        section.showing = false;
    }
}

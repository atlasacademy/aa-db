import React from "react";
import Func, {DataVal} from "../../Api/Data/Func";
import Region from "../../Api/Data/Region";
import {mergeElements} from "../../Helper/OutputHelper";
import TraitDescriptor from "../TraitDescriptor";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (region: Region, sections: FuncDescriptorSections, func: Func, dataVal: DataVal): void {
    const section = sections.affects,
        parts = section.parts;

    if (func.funcquestTvals.length) {
        parts.push('if on field');
        parts.push(
            mergeElements(
                func.funcquestTvals.map(trait => <TraitDescriptor region={region} trait={trait}/>),
                ' & '
            )
        );
    }

    if (func.functvals.length) {
        parts.push('for');

        if (func.functvals.length > 1) {
            parts.push('all');
        }

        func.functvals.forEach((trait, index) => {
            if (index > 0)
                parts.push('&');

            parts.push(<TraitDescriptor region={region} trait={trait}/>);
        });
    }

    if (!parts.length) {
        section.showing = false;
    }

}

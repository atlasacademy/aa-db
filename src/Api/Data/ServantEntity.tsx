import Attribute from "./Attribute";
import Card from "./Card";
import ClassName from "./ClassName";
import Gender from "./Gender";
import ServantAsset from "./ServantAsset";
import NoblePhantasm from "./NoblePhantasm";
import ServantType from "./ServantType";
import Skill from "./Skill";
import Trait from "./Trait";

interface ServantEntity {
    id: number;
    collectionNo: number;
    name: string;
    className: ClassName;
    type: ServantType;
    rarity: number;
    cost: number;
    lvMax: number;
    extraAssets: ServantAsset;
    gender: Gender;
    attribute: Attribute;
    traits: Trait[];
    starAbsorb: number;
    starGen: number;
    instantDeathChance: number;
    cards: Card[];
    npGain: {
        buster?: number;
        arts?: number;
        quick?: number;
        extra?: number;
        defence?: number;
    }
    hitsDistribution: {
        buster?: number[];
        arts?: number[];
        quick?: number[];
        extra?: number[];
    },
    atkBase: number;
    atkMax: number;
    hpBase: number;
    hpMax: number;
    growthCurve: number;
    atkGrowth: number[];
    hpGrowth: number[];
    bondGrowth: number[];
    // ascensionMaterials
    // skillMaterials
    skills: Skill[];
    // classPassive
    noblePhantasms: NoblePhantasm[];
    // profile
}

export default ServantEntity;
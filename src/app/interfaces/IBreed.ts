export interface IBreed{
    weight: {
        imperial: string;
        metric: string;
    };
    id: string;
    name: string;
    breed_group: null; // TODO: fix type Group breed
    cfa_url: string;
    vetstreet_url:string;
    vcahospitals_url:string;
    temperament: string;
    origin: string;
    country_codes: string; // XXX: fix type Country codes for Enum List Code
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url: string;
    hypoallergenic: number;
    reference_image_id: string;
}
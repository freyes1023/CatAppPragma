import { IBreed } from 'src/app/interfaces/IBreed';
import { Injectable } from '@angular/core';
import { DIR_COUNTRIES } from './contries';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

constructor() { }

  get_country(country_code:string){
  const code = country_code as keyof typeof DIR_COUNTRIES
  return DIR_COUNTRIES[code] || DIR_COUNTRIES.DEFAULT;
}

getTitleForKey(key: keyof typeof titlesKeys | string ){
  if (Object.keys(titlesKeys).includes(key)){
    const keySerialized = key as keyof typeof titlesKeys;
    return titlesKeys[keySerialized].title || key;
  } else {
    return key;
  }
}
getTypeForKey(key: keyof typeof titlesKeys | string ){
  if (Object.keys(titlesKeys).includes(key)){
    const keySerialized = key as keyof typeof titlesKeys;
    return titlesKeys[keySerialized].type || 'text';
  } else {
    return 'text';
  }
}

}

const titlesKeys = {
  weight: {
    title: 'Weight',
    type: 'range'
  },
  id: {
    title: 'ID',
    type: 'code'
  },
  name: {
    title: 'Name',
    type: 'text'
  },
  cfa_url: {
    title: 'CFA URL',
    type: 'url'
  },
  vetstreet_url: {
    title: 'Vetstreet URL',
    type: 'url'
  },
  vcahospitals_url: {
    title: 'VCA Hospitals URL',
    type: 'url'
  },
  temperament: {
    title: 'Temperament',
    type: 'text'
  },
  origin: {
    title: 'Origin',
    type: 'text'
  },
  country_codes: {
    title: 'Country Codes',
    type: 'code'
  },
  country_code: {
    title: 'Country Code',
    type: 'code'
  },
  description: {
    title: 'Description',
    type: 'text'
  },
  life_span: {
    title: 'Life Span',
    type: 'range'
  },
  indoor: {
    title: 'Indoor',
    type: 'boolean'
  },
  lap: {
    title: 'Lap',
    type: 'boolean'
  },
  alt_names: {
    title: 'Alternative Names',
    type: 'text'
  },
  adaptability: {
    title: 'Adaptability',
    type: 'range'
  },
  affection_level: {
    title: 'Affection Level',
    type: 'range'
  },
  child_friendly: {
    title: 'Child Friendly',
    type: 'range'
  },
  dog_friendly: {
    title: 'Dog Friendly',
    type: 'range'
  },
  energy_level: {
    title: 'Energy Level',
    type: 'range'
  },
  grooming: {
    title: 'Grooming',
    type: 'range'
  },
  health_issues: {
    title: 'Health Issues',
    type: 'range'
  },
  intelligence: {
    title: 'Intelligence',
    type: 'range'
  },
  shedding_level: {
    title: 'Shedding Level',
    type: 'range'
  },
  social_needs: {
    title: 'Social Needs',
    type: 'range'
  },
  stranger_friendly: {
    title: 'Stranger Friendly',
    type: 'range'
  },
  vocalisation: {
    title: 'Vocalisation',
    type: 'range'
  },
  experimental: {
    title: 'Experimental',
    type: 'boolean'
  },
  hairless: {
    title: 'Hairless',
    type: 'boolean'
  },
  natural: {
    title: 'Natural',
    type: 'boolean'
  },
  rare: {
    title: 'Rare',
    type: 'boolean'
  },
  rex: {
    title: 'Rex',
    type: 'boolean'
  },
  suppressed_tail: {
    title: 'Suppressed Tail',
    type: 'boolean'
  },
  short_legs: {
    title: 'Short Legs',
    type: 'boolean'
  },
  wikipedia_url: {
    title: 'Wikipedia URL',
    type: 'url'
  },
  hypoallergenic: {
    title: 'Hypoallergenic',
    type: 'boolean'
  }
};

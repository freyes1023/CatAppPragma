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
    return titlesKeys[keySerialized] || key;
  } else {
    return key;
  }

}

}

const titlesKeys = {
  weight: 'Weight',
  id: 'ID',
  name: 'Name',
  cfa_url: 'CFA URL',
  vetstreet_url: 'Vetstreet URL',
  vcahospitals_url: 'VCA Hospitals URL',
  temperament: 'Temperament',
  origin: 'Origin',
  country_codes: 'Country Codes',
  country_code: 'Country Code',
  description: 'Description',
  life_span: 'Life Span',
  indoor: 'Indoor',
  lap: 'Lap',
  alt_names: 'Alternative Names',
  adaptability: 'Adaptability',
  affection_level: 'Affection Level',
  child_friendly: 'Child Friendly',
  dog_friendly: 'Dog Friendly',
  energy_level: 'Energy Level',
  grooming: 'Grooming',
  health_issues: 'Health Issues',
  intelligence: 'Intelligence',
  shedding_level: 'Shedding Level',
  social_needs: 'Social Needs',
  stranger_friendly: 'Stranger Friendly',
  vocalisation: 'Vocalisation',
  experimental: 'Experimental',
  hairless: 'Hairless',
  natural: 'Natural',
  rare: 'Rare',
  rex: 'Rex',
  suppressed_tail: 'Suppressed Tail',
  short_legs: 'Short Legs',
  wikipedia_url: 'Wikipedia URL',
  hypoallergenic: 'Hypoallergenic',
}
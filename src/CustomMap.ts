import { User } from './User';
import { Company } from './Company';

//Instructions for every other class
// on how can they be an an argument for 'addMaker'
interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMaps {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}